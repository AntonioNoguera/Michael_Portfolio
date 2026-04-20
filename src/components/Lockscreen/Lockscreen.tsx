'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useLockscreen } from '@/contexts/LockscreenContext';

const AUTO_UNLOCK_MS = 4000;

function useClock(locale: string) {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        setNow(new Date());
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    if (!now) return { time: '', date: '' };

    const time = now.toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    const date = now.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });

    return { time, date };
}

export default function Lockscreen() {
    const t = useTranslations('Cover');
    const locale = useLocale();
    const { isUnlocked, unlock } = useLockscreen();
    const { time, date } = useClock(locale);
    const [autoReady, setAutoReady] = useState(false);

    useEffect(() => {
        if (isUnlocked) return;
        const id = setTimeout(() => setAutoReady(true), AUTO_UNLOCK_MS);
        return () => clearTimeout(id);
    }, [isUnlocked]);

    return (
        <AnimatePresence>
            {!isUnlocked && (
                <motion.div
                    key="lockscreen"
                    initial={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    onClick={unlock}
                    onKeyDown={unlock}
                    tabIndex={0}
                    role="button"
                    aria-label={t('unlock_hint')}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-between py-20 px-6 cursor-pointer bg-black/40 backdrop-blur-md text-white_primary focus:outline-none"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <p className="text-7xl md:text-8xl font-light tabular-nums tracking-tight">
                            {time || '--:--'}
                        </p>
                        <p className="text-sm md:text-base capitalize tracking-wide text-white_primary/80">
                            {date}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col items-center gap-6 text-center max-w-xl"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <h1 className="text-4xl md:text-6xl font-bold">{t('name')}</h1>
                            <p className="text-base md:text-lg text-white_primary/80">{t('role')}</p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex flex-col items-center gap-3 px-6 py-4 rounded-2xl bg-white_primary/10 backdrop-blur-sm border border-white_primary/15"
                        >
                            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white_primary/60">
                                {t('project_label')}
                            </span>
                            <p className="text-xs md:text-sm text-white_primary/85 leading-relaxed">
                                {t('project_description')}
                            </p>
                            <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                                {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind', 'Framer Motion', 'next-intl'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 rounded-full bg-white_primary/10 text-[10px] md:text-xs text-white_primary/80 border border-white_primary/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: autoReady ? 1 : 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center gap-2 text-white_primary/70"
                    >
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                            className="text-xs md:text-sm"
                        >
                            {t('unlock_hint')}
                        </motion.div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
