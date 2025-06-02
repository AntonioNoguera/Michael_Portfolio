'use client'

import { useTranslations } from "next-intl";
import React from "react";

import Footer from "@/components/Footer"; 

import cv from '@png_assets/CV_ICON.png';
import mail from '@png_assets/MAIL_ICON.png';
import ContactOption from "./components/contact_option";

export default function ContactSection() {

    const t = useTranslations('Contact_Section');

    return (
        <section id="contact" className="h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-16 ">


            <div className="flex-grow flex flex-col items-center justify-center w-full">

            <p className="text-2xl font-bold text-center text-black_primary px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0">
                    Tienes algo en mente?
                </p>

                <p className="text-5xl md:text-8xl lg:text-page_title font-bold text-center text-black_primary px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0">
                    {t('title')}
                </p>


                <div className="flex flex-row justify-around w-full">
                    <div className="flex flex-col bg-slate-500 justify.">

                        {/* emailK */}
                        <div>

                        </div>

                        {/* Curriculums */}
                        <div>

                        </div>

                    </div>

                    <div className="flex flex-col bg-slate-500"> 
                        {/* Redes */}
                        <p>
                            Redes
                        </p>
                    </div>
                </div>

            </div> 

            <Footer />

        </section>
    );
}