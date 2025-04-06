import { useTranslations } from "next-intl";
import React from "react";
import LanguageCard from "../mobile/components/language_card";


import kotlin from '@png_assets/LOGO_KOTLIN.png'

export default function WebSection() {

    const t = useTranslations('Web_Section');

    return (
        <section id="web" className="h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-14">
            <p className="text-page_title font-bold text-center text-black_primary ">
                {
                    t('title').split('\n').map((line, index) => (
                        <React.Fragment key={`line-${index}`}>
                            {line}
                            <br className="br-tall" />
                        </React.Fragment>
                    ))
                }
            </p>

            <p className="text-body2 text-center px-28 text-black_primary">
                {t('subtitle')}
            </p>

            <div className="flex flex-wrap">
                <LanguageCard key="kotlin" image={kotlin} label="Kotlin" className="kotlin-header px-2" />
                <LanguageCard key="kotlina" image={kotlin} label="Kotlin" className="kotlin-header px-2" />
                <LanguageCard key="kotlins" image={kotlin} label="Kotlin" className="kotlin-header px-2" />
            </div>

        </section>
    );
}