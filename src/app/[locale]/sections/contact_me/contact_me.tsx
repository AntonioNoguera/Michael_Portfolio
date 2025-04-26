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

                <p className="text-5xl md:text-8xl lg:text-page_title font-bold text-center text-black_primary px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0">
                    {t('title')}
                </p>

                <p className="text-body2 text-center px-28 pt-6 text-black_primary">
                    {t('subtitle')}
                </p>

                <div className="flex flex-wrap w-full justify-center items- items-stretch">
                    <ContactOption
                        image={cv}
                        label={t('std_cv')}
                        sublabel={t('std_cv_subtitle')}
                    />

                    <ContactOption
                        image={cv}
                        label={t('hrvd_cv')}
                        sublabel={t('hrvd_cv_subtitle')}
                    />

                    <ContactOption 
                        image={mail} 
                        label={ t('email') } 
                        sublabel={ t('cv_email')} 
                    /> 
                </div>
            </div> 

            <Footer />

        </section>
    );
}