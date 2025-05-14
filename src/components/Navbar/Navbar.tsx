'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import NavItem, { NavItemProps } from './NavItem';

import github_logo from '@svg_assets/svg_personal_github.svg';
import mobile_logo from '@svg_assets/navbar/svg_mobile_icon.svg';
import web_logo from '@svg_assets/navbar/svg_web_icon.svg';
import contact_logo from '@svg_assets/navbar/svg_contact_me_icon.svg';

import spanish_flag from '@png_assets/FLAG_SPANISH.png';
import english_flag from '@png_assets/FLAG_ENGLISH.png';
import React from 'react';

import ReactMarkdown from 'react-markdown';


interface NavItemData extends Omit<NavItemProps, 'hrefClass' | 'spanClass'> {
  id: string;
}

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (): void => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(es|en)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const navItems: NavItemData[] = [
    { id: 'about', href: '#about', text: t('about_me'), icon: github_logo },
    { id: 'mobile', href: '#mobile', text: t('mobile_section'), icon: mobile_logo },
    { id: 'web', href: '#web', text: t('web_section'), icon: web_logo },
    { id: 'contact', href: '#contact', text: t('contact_me'), icon: contact_logo }
  ];

  return (
    <nav className="bg-primary shadow text-white_primary text-center">
      <div className=" h-full flex flex-col justify-between items-center">
        <div className='w-full flex flex-col text-sm italic py-14 -mb-14 bg-slate-400 -mx-2 bg-fade-top-down'>
          <ReactMarkdown
            components={{
              p: ({ children }) => <span>{children}</span>,
            }}
          >
            {t('title')}
          </ReactMarkdown>
        </div>

        <div className="flex flex-col gap-8 items-center text-center w-full px-2 p ">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              href={item.href}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>

        <button
          onClick={handleLanguageChange}
          className="px-8 mb-10 py-1 rounded flex bg-white_primary  hover:bg-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={locale === 'es' ? english_flag : spanish_flag}
            alt={`Bandera de idioma ${locale === 'es' ? 'inglés' : 'español'}`}
            width={30}
            height={30}
            className="transition-transform hover:rotate-3"
          />

        </button>
      </div>
    </nav>
  );
}

export default Navbar; 