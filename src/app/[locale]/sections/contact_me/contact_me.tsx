'use client'

import { useTranslations } from "next-intl";
import React from "react";

import mail from '@svg_assets/mail_icon.svg';

import SocialMediaButton from "./components/SocialMediaButton";
import { ContactOptions } from "@/data/content/contact/contact_options";

export default function ContactSection() {

    const t = useTranslations('Contact_Section');

    const subtitleClass: string = "text-primary text-5xl font-bold";

    const buttonClassName: string = "bg-primary rounded-2xl text-white_primary text-xl md:text-2xl lg:text-3xl px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 font-semibold items-center flex-row flex shadow-md cursor-pointer w-full max-w-xs md:max-w-sm lg:max-w-none hover:shadow-lg hover:scale-105 hover:bg-primary/90 transition-all duration-200 ease-in-out";

    const iconStyles: string = "inline-block w-8 h-8 brightness-0 invert";

    return (
        <section id="contact" className="h-screen snap-start bg-secondary flex flex-col items-centertext-center ">

            <div className="flex flex-grow flex-col gap-y-10 items-center justify-center w-[80%] mx-auto">

                <div>
                    <p className="text-3xl font-bold text-center text-black_primary px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0">
                        Tienes algo en mente?
                    </p>

                    <p className="text-5xl md:text-8xl lg:text-page_title font-bold text-center text-black_primary px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0">
                        {t('title')}
                    </p>
                </div>

                <div className="flex flex-row gap-x-16 justify-around w-full">

                    <div className="flex flex-col flex-1 justify-between text-center">
                        {/* email */}
                        <div className="flex flex-col gap-4">
                            <p className={subtitleClass}>Agendemos una cita</p>
                            <div className={`${buttonClassName} gap-x-4 w-full align-center justify-a`}>
                                <img
                                    src={mail.src}
                                    alt="Mail Icon"
                                    className={iconStyles}></img>
                                <span>
                                    Mándame un correo
                                </span>
                            </div>
                        </div>

                        {/* Curriculums */}
                        <div className="flex flex-col gap-4 justify-start">
                            <p className={subtitleClass}>Curriculums</p>
                            <div className="flex flex-row gap-x-2">
                                <div className={`${buttonClassName} !text-body2 !justify-center`}>
                                    Latino
                                </div>

                                <div className={`${buttonClassName} !text-body2 !justify-center`}>
                                    Internacional
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col  gap-4">
                        {/* Redes */}
                        <p className={subtitleClass}> Redes Sociales </p>

                        <div className="flex flex-col gap-6">
                            {
                                ContactOptions.map((item, index) => (
                                    <SocialMediaButton
                                        key={index}
                                        networkInfo={item}
                                        className={buttonClassName}
                                        onClick={() => window.open(item.newtorkLink, '_blank')}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}