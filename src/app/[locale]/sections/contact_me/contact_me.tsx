'use client'

import { useTranslations } from "next-intl";
import React from "react";

import cv from '@png_assets/CV_ICON.png';
import insta from '@svg_assets/svg_instagram.svg'

export default function ContactSection() {

    const t = useTranslations('Contact_Section');

    const subtitleClass: string = "text-primary text-5xl font-bold";

    // const buttonOption: string = "bg-primary rounded-2xl text-white_primary text-3xl px-4 py-2 font-semibold items-center flex-row flex shadow-md cursor-pointer";
    const buttonOption: string = "bg-primary rounded-2xl text-white_primary text-xl md:text-2xl lg:text-3xl px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 font-semibold items-center flex-row flex shadow-md cursor-pointer w-full max-w-xs md:max-w-sm lg:max-w-none";
    return (
        <section id="contact" className="h-screen snap-start bg-secondary flex flex-col items-centertext-center ">

            <div className="flex flex-grow flex-col gap-y-10 items-center justify-center w-full">

                <div>
                    <p className="text-3xl font-bold text-center text-black_primary px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0">
                        Tienes algo en mente?
                    </p>

                    <p className="text-5xl md:text-8xl lg:text-page_title font-bold text-center text-black_primary px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0">
                        {t('title')}
                    </p>
                </div>

                <div className="flex flex-row gap-x-1 xl:gap-x-32 justify-center w-full">

                    <div className="flex flex-col justify-between">
                        {/* emailK */}
                        <div className="flex flex-col gap-4">
                            <p className={subtitleClass}>Pongamonos en contacto</p>
                            <div className={buttonOption}>
                                Boton de contacto
                            </div>
                        </div>

                        {/* Curriculums */}
                        <div className="flex flex-col gap-4">
                            <p className={subtitleClass}>Curriculums</p>
                            <div className={buttonOption}>
                                Boton de Curriculum 1
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Redes */}
                        <p className={subtitleClass}>
                            Redes Sociales
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className={buttonOption}>
                                <img src={insta.src} alt="Curriculum" className="w-10inline-block filter brightness-0 invert" />

                                <div className="flex flex-row items-end ml-4">
                                    <div>Instagram</div>
                                    <div className="text-sm py-1 text-gray-500"> (En construcción)</div>

                                </div>

                            </div>

                            <div className={buttonOption}>
                                Insta
                            </div>

                            <div className={buttonOption}>
                                Insta
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}