'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

type LanguageCardProps = {
    image: StaticImageData | string;
    label: string;
    className?: string;
};

export default function LanguageCard({ image, label, className = '' }: LanguageCardProps) {
    return (
        <div className={`py-6 m-10 px-10 cursor-pointer flex bg-white flex-col justify-center items-center bg-white_primary shadow-std rounded-xl`}>
            <Image
                src={image}
                alt={label}
                className="pb-2"
                height={180}
            />
            <p className={`text-center text-h2 -mb-4 font-semibold ${className}`}>{label}</p>
        </div>
    );
}