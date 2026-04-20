'use client';

import { createContext, useCallback, useContext, useState, ReactNode } from 'react';

type LockscreenContextValue = {
    isUnlocked: boolean;
    unlock: () => void;
};

const LockscreenContext = createContext<LockscreenContextValue | null>(null);

export function LockscreenProvider({ children }: { children: ReactNode }) {
    const [isUnlocked, setIsUnlocked] = useState(false);

    const unlock = useCallback(() => {
        setIsUnlocked(true);
    }, []);

    return (
        <LockscreenContext.Provider value={{ isUnlocked, unlock }}>
            {children}
        </LockscreenContext.Provider>
    );
}

export function useLockscreen() {
    const ctx = useContext(LockscreenContext);
    if (!ctx) throw new Error('useLockscreen must be used inside LockscreenProvider');
    return ctx;
}
