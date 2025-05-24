'use client'

import { useTranslations } from "next-intl";
import React, { useState } from "react";

import SharedLayoutAnimation from "./sub_sections/web_shared_sections";

export default function WebSection() {

    const t = useTranslations('Web_Section');

    return (
        <section id="web" className="min-h-screen  md:h-screen snap-start bg-secondary bg-opacity-95 flex flex-col items-center justify-center  md:pb-0">

            
            <p className="text-5xl md:text-8xl lg:text-page_title font-bold text-center text-black_primary px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0">
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

            <SharedLayoutAnimation />            
        </section>
    );
}