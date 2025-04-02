import { useTranslations } from 'next-intl';
import Image from 'next/image'

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
        <section id="about" className="h-screen text-primary box-border flex items-center text-center bg-white_primary bg-opacity-90 justify-center pt-14" >
            <div className="flex space-x-4 w-full px-4 items-center justify-center">
                <div className="p-4 ">
                    <Image
                        src={myself}
                        alt="Una descripción de la imagen"
                        className='rounded-3xl shadow-std h-[80vh]'
                        style={{ width: 'auto' }}
                    />
                </div>
                <div className="flex-1 p-4 justify-centeritems-center">

                    { /** DESCRIPTCIÓN PERSONAL */}
                    <div>
                        <h1 className="text-h2 font-semibold text-black_primary mb-4">{c('name')}</h1>
                        <p className='text-body'>{t('description')}</p>
                    </div>

                    { /** DESARROLLO ACADÉMICO */}
                    <div className='mt-6'>
                        <h1 className="text-h2 font-semibold text-black_primary mb-4">{t('vocational_training_title')}</h1>

                        <div className='flex space-x-4 w-full'>
                            <div className="flex-1 py-4 p|x-6 justify-center items-center bg-white_primary shadow-std rounded-xl">
                                <p className='text-body mb-2'>{t('tecnitian')}</p>
                                <div className="flex  w-full items-center ">
                                    <div className="flex flex-1 justify-center items-center">
                                        <Image
                                            src={dgti}
                                            alt="Una descripción de la imagen" 

                                            style={{ height: '15vh', width: 'auto' }}
                                        />
                                    </div>
                                    <div className="flex flex-1 justify-center items-center">
                                        <Image
                                            src={cbtis}
                                            alt="Una descripción de la imagen" 
                                            style={{ height: '15vh', width: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 py-4 px-6 justify-center items-center bg-white_primary shadow-std rounded-xl">
                                <p className='text-body mb-2'>{t('engineer')}</p>

                                <div className="flex w-full items-center">
                                    <div className="flex flex-1 justify-center items-center">
                                        <Image
                                            src={uanl}
                                            alt="Una descripción de la imagen"
                                            style={{ height: '15vh', width: 'auto' }}
                                        />
                                    </div>
                                    <div className="flex flex-1 justify-center items-center">
                                        <Image
                                            src={fime}
                                            alt="Una descripción de la imagen"
                                            style={{ height: '15vh', width: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    { /** EXPERIENCIA PROFESIONAL */}
                    <div className='mt-6'>
                        <h1 className="text-h2 font-semibold text-black_primary mb-4">{t('professional_experiencie_title')}</h1>

                        <div className='flex space-x-4 w-full'>
                            <div className="flex-1 bg-white_primary shadow-std rounded-xl p-4 justify-center items-center">

                                <div className="flex w-full items-center">
                                    <div className="flex flex-1 justify-start items-center">

                                        <Image
                                            src={ef}
                                            alt="Una descripción de la imagen"
                                            width={30}
                                        />

                                        <p className='text-body font-bold pl-1'>{t('enviaflores_name')}</p>


                                        <p className='pl-2'>{t('internship_period')} </p>


                                    </div>

                                    <div className="flex justify-end items-center">
                                        <p className='text-body pr-1'>{t('android_intern')}</p>



                                        <Image
                                            src={android}
                                            alt="Una descripción de la imagen"
                                            width={30}
                                        />

                                    </div>
                                </div>

                                <div className="flex w-full items-center pt-2">
                                    <div className="flex flex-1 justify-start items-center">

                                        <Image
                                            src={ef}
                                            alt="Una descripción de la imagen"
                                            width={30}
                                        />

                                        <p className='text-body font-bold pl-1'>{t('enviaflores_name')}</p>

                                        <p className='pl-2'>{t('fulltime_period')} </p>

                                    </div>

                                    <div className="flex  justify-end items-center">
                                        <p className='text-body pr-1'>{t('ios_developer')}</p>
                                        <Image
                                            src={ios}
                                            alt="Una descripción de la imagen"
                                            width={30}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}