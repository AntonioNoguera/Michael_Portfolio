'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type LanguageCardProps = {
    image: StaticImageData | string;
    label: string;
    className?: string;
};

export default function LanguageCard({ image, label, className = '' }: LanguageCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`py-5 m-11  cursor-pointer flex flex-col justify-center items-center bg-white_primary shadow-std rounded-xl`}>
            <Image
                src={image}
                alt={label}
                className="pb-2 "
                style={{
                    height: '20vh',
                    width: 'auto',
                }}
                height={180}

            />
            <p className={`text-center text-h2 -mb-4 font-semibold ${className}`}>{label}</p>
        </motion.div>
    );
}