'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type LanguageCardProps = {
    image: (StaticImageData | string)[];
    label: string;
    classForLabel?: string;
    onClick?: () => void;
};

export default function TecnologyCard({ image, label, classForLabel = '', onClick }: LanguageCardProps) {
    return (
        <div className='p-4 w-full lg:w-[30%] md:w-[28%]'>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClick}
                className={`py-5 px-1 cursor-pointer flex h-full flex-col justify-around bg-white_primary shadow-std rounded-xl `}>

                <p className={`text-center px-5 text-xl md:text-body2 lg:text-h2 font-semibold ${classForLabel}`}>{label}</p>

                <div className="flex flex-wrap justify-center gap-4">
                    {image.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`${label}-${index}`}
                            className="pb-2 h-[10vh] md:h-[15vh] lg:h-[19vh]"
                            style={{ 
                                width: 'auto',
                            }}
                            height={180}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}