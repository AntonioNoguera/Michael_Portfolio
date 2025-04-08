'use client'

import { useTranslations } from "next-intl";
import React from "react";

import Footer from "@/components/Footer";

export default function ContactSection() {

    const t = useTranslations('Web_Section');

    return (
        <section id="contact" className="h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-14">
            <p className="text-page_title font-bold text-center text-black_primary ">
                Contactame
            </p>

            <p className="text-body2 text-center px-28 pt-6 text-black_primary">
                {t('subtitle')}
            </p>

            <Footer/>

        </section>
    );
}