'use client';

import { TimelineApp, TimelineLink } from '@/data/types/timeline_app';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';

import githubIcon from '@png_assets/svg_github.png';
import appleIcon from '@png_assets/LOGO_APPLE.png';
import androidIcon from '@png_assets/LOGO_ANDROID.png';

const linkIcons: Record<TimelineLink['type'], StaticImageData | null> = {
    github: githubIcon,
    app_store: appleIcon,
    play_store: androidIcon,
    web: null,
};

export type TimelineAppModalProps = {
    app: TimelineApp | null;
    onClose: () => void;
};

const backdrop = {
    hidden: { opacity: 0, transition: { duration: 0.12 } },
    visible: { opacity: 1, transition: { duration: 0.18 } },
};

const panel = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.96, y: 8, transition: { duration: 0.12, ease: 'easeOut' } },
};

const contentChild = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
};

export default function TimelineAppModal({ app, onClose }: TimelineAppModalProps) {
    const t = useTranslations();

    useEffect(() => {
        if (!app) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [app, onClose]);

    return (
        <AnimatePresence>
            {app && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        variants={panel}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                        className="relative bg-white_primary text-primary rounded-3xl shadow-std w-full max-w-3xl max-h-[85vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-4 text-primary/60 hover:text-primary text-2xl leading-none z-10"
                            aria-label={t('Timeline_Section.close')}
                        >
                            ×
                        </button>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 sm:p-7">
                            <div className="flex flex-row md:flex-col gap-5 md:gap-0 items-start md:items-stretch flex-1 min-w-0">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white shadow-std overflow-hidden flex items-center justify-center md:mb-5">
                                    <Image
                                        src={app.icon}
                                        alt={t(app.nameKey)}
                                        width={128}
                                        height={128}
                                        className="object-contain w-full h-full p-2"
                                    />
                                </div>

                                <motion.div
                                    className="flex-1 min-w-0 md:w-full"
                                initial="hidden"
                                animate="visible"
                                transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
                            >
                                <motion.div variants={contentChild} className="flex items-baseline gap-2 flex-wrap">
                                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                                        {t(app.nameKey)}
                                    </h3>
                                    <span className="text-sm rounded-full px-3 py-0.5 bg-primary/10 text-primary font-semibold">
                                        {app.year}
                                    </span>
                                    <span
                                        className={`text-[11px] rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-wider ${
                                            app.kind === 'professional'
                                                ? 'bg-primary text-white_primary'
                                                : 'bg-primary/10 text-primary'
                                        }`}
                                    >
                                        {t(app.kind === 'professional' ? 'Timeline_Section.legend_professional' : 'Timeline_Section.legend_personal')}
                                    </span>
                                </motion.div>

                                {app.subtitleKey && (
                                    <motion.p variants={contentChild} className="text-sm text-primary/70 mt-1">
                                        {t(app.subtitleKey)}
                                    </motion.p>
                                )}

                                <motion.p variants={contentChild} className="mt-4 text-sm md:text-base leading-relaxed text-black_primary">
                                    {t(app.descriptionKey)}
                                </motion.p>

                                {app.techs && app.techs.length > 0 && (
                                    <motion.div variants={contentChild} className="mt-5">
                                        <p className="text-[11px] uppercase tracking-widest text-primary/60 mb-2">
                                            {t('Timeline_Section.built_with')}
                                        </p>
                                        <div className="flex gap-2 flex-wrap">
                                            {app.techs.map((tech, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.6 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + i * 0.05, type: 'spring', stiffness: 260 }}
                                                    className="w-9 h-9 rounded-lg bg-white shadow flex items-center justify-center p-1"
                                                >
                                                    <Image
                                                        src={tech}
                                                        alt=""
                                                        width={32}
                                                        height={32}
                                                        className="object-contain w-full h-full"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {app.links && app.links.length > 0 && (
                                    <motion.div variants={contentChild} className="mt-5 flex gap-2 flex-wrap">
                                        {app.links.map((link, i) => {
                                            const icon = linkIcons[link.type];
                                            return (
                                                <a
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1.5 rounded-full bg-primary text-white_primary hover:bg-primary85 transition-colors"
                                                >
                                                    {icon && (
                                                        <Image
                                                            src={icon}
                                                            alt=""
                                                            width={16}
                                                            height={16}
                                                            className="object-contain"
                                                        />
                                                    )}
                                                    <span>{link.labelKey ? t(link.labelKey) : link.type}</span>
                                                </a>
                                            );
                                        })}
                                    </motion.div>
                                )}
                                </motion.div>
                            </div>

                            <div className="shrink-0 mx-auto md:mx-0 self-center">
                                <div className="relative aspect-[9/19.5] w-[180px] bg-black_primary/10 rounded-[2rem] overflow-hidden ring-[6px] ring-black_primary/80 shadow-std">
                                    {app.coverImage && (
                                        <Image
                                            src={app.coverImage}
                                            alt={t(app.nameKey)}
                                            fill
                                            className="object-cover"
                                            sizes="180px"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
