import Slider from "@/components/Slider";

import Image from 'next/image';

import kotlin from '@png_assets/LOGO_KOTLIN.png'
import swift from '@png_assets/Swift.png'
import dart from '@png_assets/LOGO_DART.png'
import ionic from '@png_assets/LOGO_IONIC.png'

import LanguageCard from "./components/language_card";

export default function MobileDev() {
    const languages = [
        <LanguageCard image={kotlin} label="Kotlin" className="kotlin-header"/>, 
        <LanguageCard image={swift} label="Swift" className="swift-header"/>, 
        <LanguageCard image={dart} label="Dart" className="dart-header"/>, 
        <LanguageCard image={ionic} label="Ionic" className="ionic-header"/>, 
        ];

    return (
        <section id="mobile" className="h-screen bg-secondary flex flex-col pt-28 items-center">
            <p className="text-huge  font-bold text-center mobile-header">
                
            </p> 
            <Slider items={languages} className="my-6 z-0" />
        </section>
    );
}