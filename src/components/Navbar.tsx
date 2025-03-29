'use client'

import Link from 'next/link'
import Image from 'next/image'

import {useTranslations} from 'next-intl'

import github_logo from '@png_assets/LOGO_GITHUB.png';

export default function Navbar() {

  const t = useTranslations('Navbar');

  return (
    <nav className="fixed top-0 w-full bg-primary shadow z-50 text-white_primary">
      <div className=" px-4 py-4 flex justify-between items-center">
      
      <div className='flex space-x-4'>
        <Image 
          src={github_logo}
          alt="Una descripción de la imagen"
          width={30} 
          height={30}
        />

        <h1 className="text-xl font-bold">{t('dev_name')}</h1>

      </div>
      

        <div className="space-x-8">
          <a href="#about" className="hover:text-black">{t('about_me')}</a>
          <a href="#projects" className=" hover:text-black">{t('mobile_section')}</a>
          <a href="#projects" className=" hover:text-black">{t('web_section')}</a>
          <a href="#contact" className=" hover:text-black">{t('contact_me')}</a>
        </div>
      </div>
    </nav>
  )
}