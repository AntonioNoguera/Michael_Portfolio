import Slider from "@/components/Slider";

import Image from 'next/image';

import kotlin from '@png_assets/LOGO_KOTLIN.png'
import swift from '@png_assets/Swift.png'
import dart from '@png_assets/LOGO_DART.png'
import ionic from '@png_assets/LOGO_IONIC.png'

import LanguageCard from "./components/language_card";
import { useTranslations } from "next-intl";
import React from "react";

export default function MobileDev() {

    const t = useTranslations('Mobile_Section');

    const languages = [
        <LanguageCard image={kotlin} label="Kotlin" className="kotlin-header" />,
        <LanguageCard image={swift} label="Swift" className="swift-header" />,
        <LanguageCard image={dart} label="Dart" className="dart-header" />,
        <LanguageCard image={ionic} label="Ionic" className="ionic-header" />,
    ];

    return (
        <section id="mobile" className="h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-14">
            <p className="text-page_title font-bold text-center mobile-header ">
                {t('title').split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br className="br-tall" />
                    </React.Fragment>
                ))}
            </p>

            <p className="text-body2 text-center px-28 text-black_primary">
                {t('subtitle')}
                </p>
            <Slider items={languages} className="fade-sides z-0" />
        </section>
    );
}