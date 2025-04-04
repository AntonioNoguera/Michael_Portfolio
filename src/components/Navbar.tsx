'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'

import github_logo from '@png_assets/LOGO_GITHUB.png';
import spanish_flag from '@png_assets/FLAG_SPANISH.png';
import english_flag from '@png_assets/FLAG_ENGLISH.png';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = () => {

    const newLocale = locale === 'es' ? 'en' : 'es';

    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(es|en)/, '') || '/';

    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <nav className="fixed top-0 z-10 opacity-90 w-full bg-primary shadow text-white_primary">
      <div className="px-4 py-4 flex justify-between items-center">

        <div className='flex space-x-4'>
          <Image
            src={github_logo}
            alt="Una descripción de la imagen"
            width={30}
            height={30}
          />

          <h1 className="text-xl font-bold">{t('dev_name')}</h1>
        </div>

        <div className="flex items-center">
          <div className="space-x-8 mr-6">
            <a href="#about" className="hover:text-black">{t('about_me')}</a>
            <a href="#mobile" className="hover:text-black">{t('mobile_section')}</a>
            <a href="#web" className="hover:text-black">{t('web_section')}</a>
            <a href="#contact" className="hover:text-black">{t('contact_me')}</a>
          </div>

          <button
            onClick={handleLanguageChange}
            className="px-3 py-1 rounded bg-white_primary text-primary hover:bg-gray-200 transition-colors cursor-pointer"
          >

            <Image
              src={locale === 'es' ? english_flag : spanish_flag}
              alt="Una descripción de la imagen"
              width={30}
              height={30}
            />


          </button>
        </div>
      </div>
    </nav>
  )
}