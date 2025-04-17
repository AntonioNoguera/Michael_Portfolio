import Slider from "@/components/Slider";

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
        <LanguageCard key="kotlin" image={kotlin} label="Kotlin" className="kotlin-header" />,
        <LanguageCard key="swift" image={swift} label="Swift" className="swift-header" />,
        <LanguageCard key="dart" image={dart} label="Dart" className="dart-header" />,
        <LanguageCard key="ionic" image={ionic} label="Ionic" className="ionic-header" />,
    ];

    return (
        <section id="mobile" className="min-h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-14">
            <p className="text-6xl md:text-8xl lg:text-page_title font-bold text-center px-4 md:px-6 transition-all duration-300 mt-4 lg:mt-0 mobile-header ">
                {
                    t('title').split('\n').map((line, index) => (
                        <React.Fragment key={`line-${index}`}>
                            {line}
                            <br className="br-tall" />
                        </React.Fragment>
                    ))
                }
            </p>

            <p className="text-sm md:text-body2 text-center px-4 md:px-8 lg:px-28 pt-6 text-black_primary">
                {t('subtitle')}
            </p>
            <Slider items={languages} className="fade-sides z-0" />
        </section>
    );
}