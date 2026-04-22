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
        transition: { staggerChildren: 0.035, delayChildren: 0.05 },
    },
};

const yearPillVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: { type: 'spring', stiffness: 420, damping: 20, delay: 0.075 },
    },
};

export default function TimelineYearColumn({ year, apps, onSelect }: TimelineYearColumnProps) {
    const professional = apps.filter((a) => a.kind === 'professional');
    const personal = apps.filter((a) => a.kind === 'personal');
    const hasApps = apps.length > 0;

    return (
        <div className="grid grid-rows-[1fr_auto_1fr] items-stretch min-w-[112px] md:min-w-[128px] h-[540px]">
            <motion.div
                variants={stackVariants}
                className="flex flex-col items-center gap-4 justify-end pb-6"
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
                whileHover={hasApps ? { scale: 1.06 } : undefined}
                transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                className="relative z-10 mx-auto flex items-center justify-center select-none"
            >
                <span
                    className={`relative px-5 py-1.5 rounded-full text-lg md:text-xl font-bold tabular-nums tracking-tight transition-colors ${
                        hasApps
                            ? 'bg-white_primary text-primary ring-2 ring-primary shadow-[0_6px_16px_-6px_rgba(51,89,94,0.45)]'
                            : 'bg-secondary text-primary/40 ring-1 ring-primary/15'
                    }`}
                >
                    {year}
                </span>
            </motion.div>

            <motion.div
                variants={stackVariants}
                className="flex flex-col items-center gap-4 justify-start pt-6"
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
