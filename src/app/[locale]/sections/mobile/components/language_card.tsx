'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type LanguageCardProps = {
    image: StaticImageData | string;
    languageImage: StaticImageData | string;
    label: string;
    className?: string;
};

export default function LanguageCard({ image, languageImage, label, className = '' }: LanguageCardProps) {
    return (
        <div className=' mx-11 my-10'>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`py-5  cursor-pointer flex flex-col justify-center items-center bg-white_primary shadow-std rounded-xl`}>

                <p className={`text-center text-h2 font-semibold ${className}`}>{label}</p>

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
                <div className='w-full items-center justify-center -mb-3 flex flex-row gap-x-2'>

                <span className={`tfont-medium text-h3  ${className}`}>usando</span>

                    <Image
                        src={languageImage}
                        alt={label}
                        style={{
                            height: 'auto',
                            width: '25px',
                        }}
                        height={180}
                    />
 

                </div>
            </motion.div>
        </div>

    );
}