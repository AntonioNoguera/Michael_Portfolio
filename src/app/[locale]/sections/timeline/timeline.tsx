'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { TimelineApps, TimelineYears } from '@/data/content/landing/timeline_apps';
import { TimelineApp } from '@/data/types/timeline_app';
import TimelineYearColumn from './components/timeline_year_column';
import TimelineAppModal from './components/timeline_app_modal';

const trackVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const AXIS_TOP_PX = 309;

export default function Timeline() {
    const t = useTranslations('Timeline_Section');
    const [selected, setSelected] = useState<TimelineApp | null>(null);

    const scrollRef = useRef<HTMLDivElement>(null);
    const drag = useRef({
        down: false,
        dragging: false,
        pointerId: -1,
        startX: 0,
        scrollLeft: 0,
        lastX: 0,
        lastT: 0,
        velocity: 0,
    });
    const rafRef = useRef<number | null>(null);
    const [grabbing, setGrabbing] = useState(false);

    const cancelInertia = () => {
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
    };

    const startInertia = () => {
        const FRICTION = 0.95;
        const MIN_V = 0.05;
        let lastTs = performance.now();
        const step = (ts: number) => {
            if (!scrollRef.current) return;
            const dt = ts - lastTs;
            lastTs = ts;
            const v = drag.current.velocity;
            const prev = scrollRef.current.scrollLeft;
            scrollRef.current.scrollLeft = prev - v * dt;
            if (scrollRef.current.scrollLeft === prev) {
                drag.current.velocity = 0;
                rafRef.current = null;
                return;
            }
            drag.current.velocity = v * Math.pow(FRICTION, dt / 16.67);
            if (Math.abs(drag.current.velocity) < MIN_V) {
                rafRef.current = null;
                return;
            }
            rafRef.current = requestAnimationFrame(step);
        };
        rafRef.current = requestAnimationFrame(step);
    };

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType === 'touch' || !scrollRef.current) return;
        cancelInertia();
        const now = performance.now();
        drag.current = {
            down: true,
            dragging: false,
            pointerId: e.pointerId,
            startX: e.clientX,
            scrollLeft: scrollRef.current.scrollLeft,
            lastX: e.clientX,
            lastT: now,
            velocity: 0,
        };
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!drag.current.down || !scrollRef.current) return;
        const dx = e.clientX - drag.current.startX;
        if (!drag.current.dragging) {
            if (Math.abs(dx) <= 4) return;
            drag.current.dragging = true;
            scrollRef.current.setPointerCapture?.(e.pointerId);
            setGrabbing(true);
        }
        scrollRef.current.scrollLeft = drag.current.scrollLeft - dx;

        const now = performance.now();
        const dt = now - drag.current.lastT;
        if (dt > 0) {
            const instV = (e.clientX - drag.current.lastX) / dt;
            drag.current.velocity = drag.current.velocity * 0.7 + instV * 0.3;
        }
        drag.current.lastX = e.clientX;
        drag.current.lastT = now;
    };

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (drag.current.dragging) {
            scrollRef.current?.releasePointerCapture?.(e.pointerId);
            if (Math.abs(drag.current.velocity) > 0.1) startInertia();
        }
        drag.current.down = false;
        setGrabbing(false);
    };

    const onClickCapture = (e: React.MouseEvent) => {
        if (drag.current.dragging) {
            e.stopPropagation();
            e.preventDefault();
            drag.current.dragging = false;
        }
    };

    const onWheel = () => cancelInertia();

    useEffect(() => () => cancelInertia(), []);

    const appsByYear = useMemo(() => {
        const map = new Map<number, TimelineApp[]>();
        for (const app of TimelineApps) {
            (map.get(app.year) ?? map.set(app.year, []).get(app.year)!).push(app);
        }
        return map;
    }, []);

    return (
        <section
            id="timeline"
            className="h-screen snap-start flex flex-col items-center relative overflow-hidden bg-secondary text-primary"
        >
            <div className="w-full pt-10 md:pt-12 flex flex-col items-center z-10 gap-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black_primary tracking-tight px-4">
                    {t('title').replace(/\n/g, ' ')}
                </h2>

                <p className="text-xs md:text-sm text-center px-6 text-black_primary/60 max-w-xl">
                    {t('subtitle')}
                </p>

                <span className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                        <polyline points="9 18 3 12 9 6" opacity="0.5" />
                    </svg>
                    {t('hint')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                        <polyline points="15 18 21 12 15 6" opacity="0.5" />
                    </svg>
                </span>
            </div>

            <div
                ref={scrollRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onClickCapture={onClickCapture}
                onWheel={onWheel}
                className={`w-full flex-1 min-h-0 overflow-x-auto overflow-y-visible select-none flex items-center ${grabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
            >
                <div className="relative px-6 py-10 min-w-max mx-auto">
                    <div
                        className="pointer-events-none absolute left-0 right-0 h-[2px] bg-primary/30"
                        style={{ top: `${AXIS_TOP_PX}px` }}
                    />

                    <motion.div
                        variants={trackVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="relative flex flex-row items-start justify-start md:justify-center gap-4 md:gap-6"
                    >
                        {TimelineYears.map((year) => (
                            <TimelineYearColumn
                                key={year}
                                year={year}
                                apps={appsByYear.get(year) ?? []}
                                onSelect={setSelected}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <TimelineAppModal app={selected} onClose={() => setSelected(null)} />
        </section>
    );
}
