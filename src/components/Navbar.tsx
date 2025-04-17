'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'

import github_logo from '@svg_assets/svg_personal_github.svg';
import spanish_flag from '@png_assets/FLAG_SPANISH.png';
import english_flag from '@png_assets/FLAG_ENGLISH.png';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(es|en)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuWithDelay = () => {
    setTimeout(() => setIsMenuOpen(false), 150);
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
            className="hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xl font-bold">{t('dev_name')}</span>
        </div>

        {/* Menu Hamburgesa */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`absolute block w-6 h-0.5 bg-white_primary transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-4' : 'top-2'}`}></span>
          <span className={`absolute block w-6 h-0.5 bg-white_primary transition-all duration-300 ease-in-out top-4 ${isMenuOpen ? 'opacity-0 -translate-x-2' : 'opacity-100'}`}></span>
          <span className={`absolute block w-6 h-0.5 bg-white_primary transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-4' : 'top-6'}`}></span>
        </button>

        {/* Escritorio */}
        <div className="hidden md:flex items-center">
          <div className="space-x-8 mr-6">
            <a href="#about" className="hover:text-black relative group">
              {t('about_me')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white_primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#mobile" className="hover:text-black relative group">
              {t('mobile_section')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white_primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#web" className="hover:text-black relative group">
              {t('web_section')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white_primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-black relative group">
              {t('contact_me')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white_primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <button
            onClick={handleLanguageChange}
            className="px-3 py-1 rounded bg-white_primary text-primary hover:bg-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={locale === 'es' ? english_flag : spanish_flag}
              alt="Una descripción de la imagen"
              width={30}
              height={30}
              className="transition-transform hover:rotate-3"
            />
          </button>
        </div>
      </div>

      {/* Movil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } bg-primary shadow-md`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <a
            href="#about"
            className="transform hover:translate-x-2 transition-transform duration-200 hover:text-black py-2"
            onClick={closeMenuWithDelay}
          >
            {t('about_me')}
          </a>
          <a
            href="#mobile"
            className="transform hover:translate-x-2 transition-transform duration-200 hover:text-black py-2"
            onClick={closeMenuWithDelay}
          >
            {t('mobile_section')}
          </a>
          <a
            href="#web"
            className="transform hover:translate-x-2 transition-transform duration-200 hover:text-black py-2"
            onClick={closeMenuWithDelay}
          >
            {t('web_section')}
          </a>
          <a
            href="#contact"
            className="transform hover:translate-x-2 transition-transform duration-200 hover:text-black py-2"
            onClick={closeMenuWithDelay}
          >
            {t('contact_me')}
          </a>

          <button
            onClick={handleLanguageChange}
            className="flex items-center space-x-2 py-2 transform hover:translate-x-2 transition-transform duration-200"
          >
            <Image
              src={locale === 'es' ? english_flag : spanish_flag}
              alt="Una descripción de la imagen"
              width={30}
              height={30}
              className="transform transition-transform duration-300 hover:rotate-12"
            />
            <span>{locale === 'es' ? 'English' : 'Español'}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}