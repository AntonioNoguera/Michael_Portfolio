'use client'

import { useTranslations } from "next-intl";
import React, { useState } from "react";

import ts from '@png_assets/LOGO_TS.png';
import js from '@png_assets/LOGO_JS.png';

import react from '@png_assets/LOGO_REACT.png'
import next from '@svg_assets/svg_next.svg'

import bootstrap from '@png_assets/LOGO_Bootstrap.png'
import tailwind from '@png_assets/LOGO_Tailwind.png'

import TecnologyCard from "./components/tecnology_card";
import { Modal } from "@/components/Modal";

export default function WebSection() {

    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Web_Section');

    return (
        <section id="web" className="min-h-screen py-16 md:py-0 md:h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-14">

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2 className="text-lg font-bold mb-2">¡Hola!</h2>
                <p>Este es un modal con animación de Framer Motion.</p>
            </Modal>
            
            <p className="text-3xl md:text-4xl lg:text-page_title font-bold text-center text-black_primary px-4 md:px-6">
                {
                    t('title').split('\n').map(
                        (line, index) => (
                            <React.Fragment key={`line-${index}`}>
                                {line}
                                <br className="br-tall" />
                            </React.Fragment>
                        )
                    )
                }
            </p>

            <p className="text-sm md:text-body2 text-center px-4 md:px-8 lg:px-28 pt-6 text-black_primary">
                {t('subtitle')}
            </p>

            <div className="flex flex-col md:flex-row flex-wrap w-full justify-center items-stretch gap-4 md:gap-6 px-4 md:px-6 mt-8">
                <TecnologyCard
                    key="programming"
                    image={[ts, js]}
                    label={t('programming_languages')}
                    className=" " 
                    classForLabel="programming-languages-header" 
                    onClick={() => setIsOpen(true)}
                />

                <TecnologyCard
                    key="frameworks"
                    image={[next, react]}
                    label={t('libraries_languages')}
                    className=" "
                    classForLabel="libraries-frameworks-header"
                    onClick={() => setIsOpen(true)}
                />

                <TecnologyCard
                    key="libraries"
                    image={[bootstrap, tailwind]}
                    label={t('css_languages')}
                    className=" "
                    classForLabel="css-libraries-header"
                    onClick={() => setIsOpen(true)}
                />
            </div>
        </section>
    );
}