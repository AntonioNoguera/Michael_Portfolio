import Slider from "@/components/Slider";

import android from '@png_assets/LOGO_ANDROID.png'
import kotlin from '@png_assets/LOGO_KOTLIN.png'

import ios from '@png_assets/LOGO_APPLE.png'
import swift from '@png_assets/Swift.png'

import mult from '@png_assets/LOGO_Multiplatform.png'
import flutter from '@png_assets/LOGO_DART.png'


import LanguageCard from "./components/language_card";
import { useTranslations } from "next-intl";
import React from "react";

export default function MobileDev() {
    
    const t = useTranslations('Mobile_Section');

    const languages = [
        <LanguageCard key="kotlin" image={android} languageImage={kotlin} label="Android" className="kotlin-header" />,
        <LanguageCard key="swift" image={ios} languageImage={swift} label="iOS (iPhone)" className="swift-header" />,
        <LanguageCard key="dart" image={mult} languageImage={flutter} label="Multiplatform" className="dart-header" />
    ];

    return (
        <section id="mobile" className="min-h-screen snap-start bg-secondary flex flex-col items-center justify-center">
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

            <Slider items={languages} className="fade-sides !w-[98%]" /> 
        </section>
    );
}