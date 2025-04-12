'use client'

import { useTranslations } from "next-intl";
import React from "react";

import Footer from "@/components/Footer";
import TecnologyCard from "../web/components/tecnology_card";
import { motion } from "framer-motion";

export default function ContactSection() {

    const t = useTranslations('Contact_Section');

    return (
        <section id="contact" className="h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-20">
            <p className="text-page_title font-bold text-center text-black_primary">
                {t('title')}
            </p>

            <div className="flex-grow flex flex-col items-center justify-center w-full">

                <p className="text-body2 text-center px-28 pt-6 text-black_primary">
                    {t('subtitle')}
                </p>

                <div className="flex flex-wrap w-full justify-center items-center items-stretch">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={`py-5 m-8 cursor-pointer flex bg-white flex-col justify-center  items-center bg-white_primary shadow-std rounded-xl`}>

                        <p className={'text-center px-5 text-h2 font-semibold'}>
                            Test
                        </p>

                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={`py-5 m-8 cursor-pointer flex bg-white flex-col justify-center  items-center bg-white_primary shadow-std rounded-xl`}>

                        <p className={'text-center px-5 text-h2 font-semibold'}>
                            Test
                        </p>

                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={`py-5 m-8 cursor-pointer flex bg-white flex-col justify-center  items-center bg-white_primary shadow-std rounded-xl`}>

                        <p className={'text-center px-5 text-h2 font-semibold'}>
                            Test
                        </p>

                    </motion.div>

                </div>
            </div> 
            <Footer />
        </section>
    );
}