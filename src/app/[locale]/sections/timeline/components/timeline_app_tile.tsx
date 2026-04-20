'use client';

import { TimelineApp } from '@/data/types/timeline_app';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export type TimelineAppTileProps = {
    app: TimelineApp;
    onClick: () => void;
    tooltipPosition?: 'top' | 'bottom';
};

const tileVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.85 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export default function TimelineAppTile({ app, onClick, tooltipPosition = 'bottom' }: TimelineAppTileProps) {
    const t = useTranslations();
    const tooltipClass = tooltipPosition === 'top' ? '-top-7' : '-bottom-7';

    return (
        <motion.button
            onClick={onClick}
            variants={tileVariants}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="w-20 h-20 md:w-24 md:h-24 group relative rounded-2xl bg-white shadow-std flex items-center justify-center overflow-visible cursor-pointer"
            aria-label={t(app.nameKey)}
        >
            <Image
                src={app.icon}
                alt={t(app.nameKey)}
                width={96}
                height={96}
                className="object-contain w-full h-full p-2 rounded-2xl"
            />
            <span className={`pointer-events-none absolute left-1/2 -translate-x-1/2 ${tooltipClass} whitespace-nowrap text-[11px] font-medium text-black_primary bg-white_primary/95 px-2.5 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20`}>
                {t(app.nameKey)}
            </span>
        </motion.button>
    );
}
