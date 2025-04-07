'use client'

import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl' 

import github_logo from '@png_assets/LOGO_GITHUB.png';
import spanish_flag from '@png_assets/FLAG_SPANISH.png';
import english_flag from '@png_assets/FLAG_ENGLISH.png';
import Link from 'next/link';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    // Determinar el nuevo locale
    const newLocale = locale === 'es' ? 'en' : 'es';
    
    // Obtener la ruta actual sin el prefijo de locale
    const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '') || '/';
    
    // Usar Link de next-intl para cambiar el idioma sin recarga completa
    router.replace(`/${newLocale}${pathWithoutLocale}`, { scroll: false });
  };

  return (
    <nav className="fixed top-0 z-10 opacity-90 w-full bg-primary shadow text-white_primary">
      <div className="px-4 py-4 flex justify-between items-center">
        <div className='flex space-x-4'>
          <Image
            src={github_logo}
            alt="GitHub Logo"
            width={30}
            height={30}
          />
          <h1 className="text-xl font-bold">{t('dev_name')}</h1>
        </div>

        <div className="flex items-center">
          <div className="space-x-8 mr-6">
            {/* Usar Link de next-intl para navegación sin recarga */}
            <Link href="#about" className="hover:text-black">{t('about_me')}</Link>
            <Link href="#mobile" className="hover:text-black">{t('mobile_section')}</Link>
            <Link href="#web" className="hover:text-black">{t('web_section')}</Link>
            <Link href="#contact" className="hover:text-black">{t('contact_me')}</Link>
          </div>

          <button
            onClick={handleLanguageChange}
            className="px-3 py-1 rounded bg-white_primary text-primary hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <Image
              src={locale === 'es' ? english_flag : spanish_flag}
              alt={locale === 'es' ? "English Flag" : "Spanish Flag"}
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}