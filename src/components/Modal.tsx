'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { ReactNode } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modal = {
    hidden: {
        opacity: 0, 
        scale: 0.75,
    },
    visible: {
        opacity: 1, 
        scale: 1,
        transition: { delay: 0.1 },
    },
    exit: {
        opacity: 0, 
        scale: 0.75,
    },
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className="relative bg-white rounded-xl shadow-xl p-6 z-60 w-[80%] w-full"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-5 text-gray-500 hover:text-black text-xl font-bold"
                            aria-label="Cerrar modal"
                        >
                            ✕
                        </button>

                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
