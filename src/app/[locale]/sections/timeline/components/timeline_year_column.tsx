'use client';

import { TimelineApp } from '@/data/types/timeline_app';
import { motion } from 'framer-motion';
import TimelineAppTile from './timeline_app_tile';

export type TimelineYearColumnProps = {
    year: number;
    apps: TimelineApp[];
    onSelect: (app: TimelineApp) => void;
};

const stackVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
};

const yearPillVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: { type: 'spring', stiffness: 260, damping: 18, delay: 0.15 },
    },
};

export default function TimelineYearColumn({ year, apps, onSelect }: TimelineYearColumnProps) {
    const professional = apps.filter((a) => a.kind === 'professional');
    const personal = apps.filter((a) => a.kind === 'personal');

    return (
        <div className="grid grid-rows-[1fr_auto_1fr] items-center min-w-[112px] md:min-w-[128px] h-[540px]">
            <motion.div
                variants={stackVariants}
                className="flex flex-col items-center gap-4 justify-end"
            >
                {professional.map((app) => (
                    <TimelineAppTile
                        key={app.id}
                        app={app}
                        onClick={() => onSelect(app)}
                        tooltipPosition="top"
                    />
                ))}
            </motion.div>

            <motion.div
                variants={yearPillVariants}
                className="relative z-10 mx-auto h-8 min-w-[64px] px-3 rounded-full bg-primary text-white_primary text-xs md:text-sm font-semibold tracking-wider flex items-center justify-center ring-4 ring-secondary"
            >
                {year}
            </motion.div>

            <motion.div
                variants={stackVariants}
                className="flex flex-col items-center gap-4 justify-start"
            >
                {personal.map((app) => (
                    <TimelineAppTile
                        key={app.id}
                        app={app}
                        onClick={() => onSelect(app)}
                        tooltipPosition="bottom"
                    />
                ))}
            </motion.div>
        </div>
    );
}
