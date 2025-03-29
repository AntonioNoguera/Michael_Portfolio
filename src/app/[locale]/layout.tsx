
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import { ReactNode } from 'react';
import { Raleway } from 'next/font/google'

import Navbar from '@components/Navbar';

import '../../styles/styles.css'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '700'], 
})
 
type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};

export default async function LocaleLayout({children, params}: Props) { 
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <head>
        <title>Michael Portfolio</title>
      </head>
      <body className={`${raleway.variable} font-sans`}>
       
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}