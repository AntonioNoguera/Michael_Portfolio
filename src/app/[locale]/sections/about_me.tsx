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
        <section id="about" className="h-screen text-primary box-border flex items-center text-center bg-white_primary bg-opacity-90 justify-center pt-14" >
            <div className="flex space-x-10 w-full px-10  items-center justify-center">
                <div className=" ">
                    <Image
                        src={myself}
                        alt="Una descripción de la imagen"
                        className='rounded-3xl shadow-std object-contain'
                        style={{
                            height: '80vh',
                            width: 'auto',
                            maxWidth: `calc(80vh * ${604 / 856})`
                        }}
                    />
                </div>

                {/* Info */}
                <div className=" text-center  items-center justify-center ">

                    {/* Descripción */}
                    <div className='mb-4 w-full'>
                        <h1 className="text-h2 font-bold">{c('name')}</h1>
                        <p className="text-body">{t('description')}</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4">
                        {/* Formación académica */}
                        <div className="mb-4">
                            <h2 className="text-h2 font-semibold ">{t('vocational_training_title')}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Técnico */}
                                <div className='shadow-std rounded-xl bg-white_primary px-6 py-2'>
                                    <p className="mb-2">{t('tecnitian')}</p>
                                    <div className="flex justify-center items-center gap-4 pb-1">
                                        <Image src={dgti} alt="DGTI" style={{ height: '15vh', width: 'auto' }} />
                                        <Image src={cbtis} alt="CBTIS" style={{ height: '15vh', width: 'auto' }} />
                                    </div>
                                </div>

                                {/* Ingeniería */}
                                <div className='shadow-std rounded-xl bg-white_primary px-6 py-2'>
                                    <p className="mb-2">{t('engineer')}</p>
                                    <div className="flex justify-center items-center gap-4 pb-1">
                                        <Image src={uanl} alt="UANL" style={{ height: '15vh', width: 'auto' }} />
                                        <Image src={fime} alt="FIME" style={{ height: '15vh', width: 'auto' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experiencia profesional */}
                        <div className="">
                            <h2 className="text-h2 font-semibold ">{t('professional_experiencie_title')}</h2>

                            <div className='shadow-std rounded-xl bg-white_primary px-3 py-2 '>
                                {/* Prácticas */}
                                <div className="flex justify-between items-center flex-wrap gap-4 mb-3 ">
                                    <div className="flex items-center gap-2 ">
                                        <Image src={ef} alt="Enviaflores" width={30} />
                                        <strong >{t('enviaflores_name')}</strong>
                                        <span className='invisible lg:visible'>{t('internship_period')}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>{t('android_intern')}</span>
                                        <Image src={android} alt="Android" width={30} />
                                    </div>
                                </div>

                                {/* Tiempo completo */}
                                <div className="flex justify-between items-center flex-wrap gap-4">
                                    <div className="flex items-center gap-2">
                                        <Image src={ef} alt="Enviaflores" width={30} />
                                        <strong>{t('enviaflores_name')}</strong>
                                        <span className='invisible lg:visible'>{t('fulltime_period')}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span >{t('ios_developer')}</span>
                                        <Image src={ios} alt="Apple" width={30} />
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