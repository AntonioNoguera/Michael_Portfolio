import { useTranslations } from "next-intl";
import React from "react";

import ts from '@png_assets/LOGO_TS.png'
import js from '@png_assets/LOGO_JS.png'

import react from '@png_assets/LOGO_REACT.png'
import next from '@svg_assets/svg_next.svg'

import bootstrap from '@png_assets/LOGO_Bootstrap.png'
import tailwind from '@png_assets/LOGO_Tailwind.png'

import TecnologyCard from "./components/tecnology_card";

export default function WebSection() {

    const t = useTranslations('Web_Section');

    return (
        <section id="web" className="h-screen snap-start bg-secondary flex flex-col items-center justify-center pt-14">
            <p className="text-page_title font-bold text-center text-black_primary ">
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

            <p className="text-body2 text-center px-28 text-black_primary">
                {t('subtitle')}
            </p>

            <div className="flex flex-wrap w-full justify-center items-center items-stretch">
                <TecnologyCard
                    key="programming"
                    image={[ts, js]}
                    label={t('programming_languages')}
                    className="w-[28%]"
                    classForLabel="programming-languages-header"
                />

                <TecnologyCard
                    key="frameworks"
                    image={[next, react]}
                    label={t('libraries_languages')}
                    className="w-[28%]"
                    classForLabel="libraries-frameworks-header"
                />

                <TecnologyCard
                    key="libraries"
                    image={[bootstrap, tailwind]}
                    label={t('css_languages')}
                    className="w-[28%]"
                    classForLabel="css-libraries-header"
                />
            </div>
        </section>
    );
}