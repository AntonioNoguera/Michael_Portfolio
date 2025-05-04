import ts from '@png_assets/LOGO_TS.png';
import js from '@png_assets/LOGO_JS.png';

import react from '@png_assets/LOGO_REACT.png'
import next from '@svg_assets/svg_next.svg'

import bootstrap from '@png_assets/LOGO_Bootstrap.png'
import tailwind from '@png_assets/LOGO_Tailwind.png'
import { useTranslations } from "next-intl";
import { useState } from "react";
import TecnologyCard from './components/tecnology_card';

export default function TecnicalTab() {

    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Web_Section');

    return (
        <div className='flex flex-col h-full bg-gray-300'>
            <p className="text-sm md:text-body2 text-center px-4 md:px-8 lg:px-28 pt-6 text-black_primary">
                {t('subtitle')}
            </p>

            <div className="flex flex-col md:flex-row md:gap-6 flex-wrap w-full justify-center items-strech transition-all duration-300">
                <TecnologyCard
                    key="programming"
                    image={[ts, js]}
                    label={t('programming_languages')}
                    classForLabel="programming-languages-header"
                    onClick={() => setIsOpen(true)}
                />

                <TecnologyCard
                    key="frameworks"
                    image={[next, react]}
                    label={t('libraries_languages')}
                    classForLabel="libraries-frameworks-header"
                    onClick={() => setIsOpen(true)}
                />

                <TecnologyCard
                    key="libraries"
                    image={[bootstrap, tailwind]}
                    label={t('css_languages')}
                    classForLabel="css-libraries-header"
                    onClick={() => setIsOpen(true)}
                />
            </div>
        </div>
    )
}