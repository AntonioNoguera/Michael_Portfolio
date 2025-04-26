'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ContactOptionProps = {
    image: StaticImageData | string;
    label: string;
    sublabel: string;
};

export default function ContactOption({ image, label, sublabel }: ContactOptionProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`py-5 m-8 cursor-pointer flex flex-col w-1/4 justify-center  items-center bg-white_primary shadow-std rounded-xl`}>

            <p className={'text-center px-5 text-h2 font-semibold'}>
                {label}
            </p>

            <p className={'text-center px-5 text-base italic text-gray-600'}>
                {sublabel}
            </p>

            <Image
                src={image}
                alt="Una descripción de la imagen"
                className=" mx-auto"
                height={100}
                priority
            />
        </motion.div>
    );
}