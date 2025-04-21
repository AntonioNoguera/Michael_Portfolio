'use client'

import { useTranslations } from "next-intl";
import React from "react";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from 'next/image';

import cv from '@png_assets/CV_ICON.png';
import mail from '@png_assets/MAIL_ICON.png';

export default function ContactSection() {

    const t = useTranslations('Contact_Section');

    return (
        <section id="contact" className="min-h-screen  md:h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-16 ">
             

            <div className="flex-grow flex flex-col items-center justify-center w-full">

            <p className="text-5xl md:text-8xl lg:text-page_title font-bold text-center text-black_primary px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0">
                {t('title')}
            </p>

            <p className="text-body2 text-center px-28 pt-6 text-black_primary">
                {t('subtitle')}
            </p>

                <div className="flex flex-wrap w-full justify-center items- items-stretch">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={`py-5 m-8 cursor-pointer flex flex-col justify-center  items-center bg-white_primary shadow-std rounded-xl`}>

                        <p className={'text-center px-5 text-h2 font-semibold'}>
                            Curriculum Vitae
                            <Image
                                src={cv}
                                alt="Una descripción de la imagen"
                                className=" mx-auto" 
                                height={100} 
                                priority
                            />
                        </p>

                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={`py-5 m-8 cursor-pointer flex flex-col justify-center  items-center bg-white_primary shadow-std rounded-xl`}>

                        <p className={'text-center px-5 text-h2 font-semibold'}>
                            Correo Electrónico
                            <Image
                                src={mail}
                                alt="Una descripción de la imagen"
                                className=" mx-auto" 
                                height={100} 
                                priority
                            />
                        </p>
                    </motion.div>
 

                </div> 
            </div>

            
            <Footer />
            
        </section>
    );
}