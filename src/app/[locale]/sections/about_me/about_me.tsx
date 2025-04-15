import { useTranslations } from 'next-intl';
import Image from 'next/image';

import myself from '@png_assets/Me.png';
import dgti from '@png_assets/LOGO_DGETI.png';
import cbtis from '@png_assets/LOGO_CBTIS.png';
import uanl from '@png_assets/LOGO_UANL.png';
import fime from '@png_assets/LOGO_FIME.png';
import ef from '@svg_assets/svg_enviaflores.svg';
import android from '@svg_assets/svg_android.svg';
import ios from '@svg_assets/svg_apple.svg';

export default function AboutMe() {
    const t = useTranslations('About_Me_Section');
    const c = useTranslations('Commons');

    return (
        <section id="about" className="min-h-screen text-primary snap-start box-border flex items-center text-center bg-white_primary bg-opacity-90 justify-center pt-14">
            <div className="w-[95%] flex flex-col sm:flex-row space-x-4 md:space-x-8 lg:space-x-10 items-center justify-center">
                {/* Foto - adaptada con breakpoints de Tailwind */}
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

                {/* Info - adaptada con breakpoints de Tailwind */}
                <div className="w-full md:w-3/4 text-center md:text-left transition-all duration-300 md:pr-0 pr-5">
                    {/* Descripción */}
                    <div className="mb-6 w-full">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{c('name')}</h1>
                        <p className="text-sm md:text-base lg:text-lg mt-2">{t('description')}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Formación académica */}
                        <div className="mb-4 lg:mb-0">
                            <h2 className="text-xl md:text-2xl font-semibold mb-3">{t('vocational_training_title')}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Técnico */}
                                <div className="shadow-std rounded-xl bg-white_primary px-3 py-2">
                                    <p className="mb-2">{t('tecnitian')}</p>
                                    <div className="flex justify-center items-center gap-2 pb-1">
                                        <div className="h-12 sm:h-16 md:h-20 w-auto">
                                            <Image src={dgti} alt="DGTI" className="h-full w-auto" />
                                        </div>
                                        <div className="h-12 sm:h-16 md:h-20 w-auto">
                                            <Image src={cbtis} alt="CBTIS" className="h-full w-auto" />
                                        </div>
                                    </div>
                                </div>

                                {/* Ingeniería */}
                                <div className="shadow-std rounded-xl bg-white_primary px-3 py-2">
                                    <p className="mb-2">{t('engineer')}</p>
                                    <div className="flex justify-center items-center gap-2 pb-1">
                                        <div className="h-12 sm:h-16 md:h-20 w-auto">
                                            <Image src={uanl} alt="UANL" className="h-full w-auto" />
                                        </div>
                                        <div className="h-12 sm:h-16 md:h-20 w-auto">
                                            <Image src={fime} alt="FIME" className="h-full w-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experiencia profesional */}
                        <div className="mb-10 sm:mb-0">
                            <h2 className="text-xl md:text-2xl font-semibold mb-3">{t('professional_experiencie_title')}</h2>

                            <div className="shadow-std rounded-xl bg-white_primary px-3 py-3">
                                {/* Prácticas */}
                                <div className="flex flex-row justify-between items-center gap-2 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Image src={ef} alt="Enviaflores" width={25} height={25} />
                                        <strong>{t('enviaflores_name')}</strong>
                                        <span className="hidden md:block">{t('internship_period')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 justify-center md:justify-end mt-1 md:mt-0">
                                        <span>{t('android_intern')}</span>
                                        <Image src={android} alt="Android" width={25} height={25} />
                                    </div>
                                </div>

                                {/* Tiempo completo */}
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <Image src={ef} alt="Enviaflores" width={25} height={25} />
                                        <strong>{t('enviaflores_name')}</strong>
                                        <span className="hidden md:block">{t('fulltime_period')}</span>
                                    </div>
                                    <div className="flex items-center gap-2 justify-center md:justify-end mt-1 md:mt-0">
                                        <span>{t('ios_developer')}</span>
                                        <Image src={ios} alt="Apple" width={25} height={25} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}