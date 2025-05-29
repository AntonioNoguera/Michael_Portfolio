import { useTranslations } from 'next-intl';
import Image from 'next/image';

import myself from '@png_assets/Me.png';
import dgti from '@png_assets/LOGO_DGETI.png';
import cbtis from '@png_assets/LOGO_CBTIS.png';
import uanl from '@png_assets/LOGO_UANL.png';
import fime from '@png_assets/LOGO_FIME.png';

import ProfessionalExperienceItem from './components/professional_experience_item';
import { UserProfesionalExperience } from '@/data/content/landing/profesional_experience';

export default function AboutMe() {
    const t = useTranslations('About_Me_Section');
    const c = useTranslations('Commons');

    return (
        <section id="about" className="min-h-screen text-primary snap-start box-border flex items-center text-center bg-white_primary bg-opacity-90 justify-center  pb-16 sm:pb-0">
            <div className="w-[95%] flex flex-col sm:flex-row space-x-4 md:space-x-8 lg:space-x-10 items-center justify-center">

                <div className="w-[90%] sm:w-1/4 mb-6 md:mb-0 transition-all duration-300 mt-4 sm:mt-0">
                    <Image
                        src={myself}
                        alt="Una descripción de la imagen"
                        className="rounded-3xl shadow-std object-contain mx-auto"
                        style={{
                            height: 'auto',
                            width: 'auto',
                            maxWidth: '100%'
                        }}
                        width={604}
                        height={856}
                        priority
                    />
                </div>

                <div className="w-full md:w-3/4 text-center md:text-left transition-all duration-300 md:pr-0 pr-5"> 
                    <div className="mb-6 w-full  text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">{c('name')}</h1>
                        <p className="text-sm md:text-base lg:text-lg mt-2">{t('description')}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6"> 
                        <div className="mb-4 lg:mb-0">
                            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-primary text-center">{t('vocational_training_title')}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> 
                                <div className="shadow-std rounded-xl bg-white_primary px-3 py-5 text-center flex flex-col justify-around">

                                    <div className="flex justify-evenly pb-1 px-10">
                                        <Image src={dgti} alt="DGTI" className="w-auto h-[13vh]" />
                                        <Image src={cbtis} alt="CBTIS" className="w-auto h-[13vh]" />
                                    </div>
                                    <p className=" pt-2 -mb-2">{t('tecnitian')}</p>
                                </div>
                                
                                <div className="shadow-std rounded-xl bg-white_primary px-3 py-5 text-center flex flex-col justify-around">
                                    <div className="flex justify-evenly px-10 pb-1">
                                        <Image src={uanl} alt="UANL" className="w-auto h-[13vh]" />

                                        <Image src={fime} alt="FIME" className="w-auto h-[13vh]" />
                                    </div>

                                    <p className=" pt-2 -mb-2">{t('engineer')}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-10 sm:mb-0">
                            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-center text-primary">{t('professional_experiencie_title')}</h2>

                            <div className="flex flex-col gap-y-3 shadow-std rounded-xl bg-white_primary px-3 py-3">
                                {UserProfesionalExperience.map((item, index) => (
                                    <ProfessionalExperienceItem
                                        key={index}
                                        experienceInfo={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}