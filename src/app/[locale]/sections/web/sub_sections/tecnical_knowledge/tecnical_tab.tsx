import ts from '@png_assets/LOGO_TS.png';
import js from '@png_assets/LOGO_JS.png';

import react from '@png_assets/LOGO_REACT.png'
import next from '@svg_assets/svg_next.svg'

import bootstrap from '@png_assets/LOGO_Bootstrap.png'
import tailwind from '@png_assets/LOGO_Tailwind.png'
import { useTranslations } from "next-intl";
// import { useState } from "react";
import TecnologyCard from './components/tecnology_card';

export default function TecnicalTab() {

    // let [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Web_Section'); 
    return (



        <div className='flex flex-col h-full w-full items-center justify-center'>
            <p className="text-sm md:text-body2 text-center px-4  pt-6 text-black_primary">
                {t('subtitle')}
            </p>

            <div className="flex flex-col md:flex-row py-[5vh] md:gap-6 justify-around  w-full transition-all duration-300">
                <TecnologyCard
                    key="programming"
                    image={[ts, js]}
                    label={t('programming_languages')}
                    classForLabel="programming-languages-header"
                    onClick={() => {}}
                />

                <TecnologyCard
                    key="frameworks"
                    image={[next, react]}
                    label={t('libraries_languages')}
                    classForLabel="libraries-frameworks-header"
                    onClick={() => {}}
                />

                <TecnologyCard
                    key="libraries"
                    image={[bootstrap, tailwind]}
                    label={t('css_languages')}
                    classForLabel="css-libraries-header"
                    onClick={() => {}}
                />
            </div>


        </div>
    )
}