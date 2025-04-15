'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type LanguageCardProps = {
    image: (StaticImageData | string)[];
    label: string;
    className: string;
    classForLabel?: string;
    onClick?: () => void;
};

export default function TecnologyCard({ image, label, classForLabel = '', className = '', onClick}: LanguageCardProps) {
    return (
        <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`py-5 m-8 cursor-pointer flex flex-col justify-center w-full md:w-[45%] lg:w-[28%] items-center bg-white_primary shadow-std rounded-xl`}>
            
            <p className={`text-center px-5 text-h2 font-semibold ${classForLabel}`}>{label}</p>
            
            <div className="flex flex-wrap justify-center gap-4">
                {image.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`${label}-${index}`}
                        className="pb-2"
                        style={{
                            height: '20vh',
                            width: 'auto',
                        }}
                        height={180}
                    />
                ))}
            </div>
        </motion.div>
    );
}