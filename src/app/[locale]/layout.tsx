
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import { ReactNode } from 'react';
 
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
      <body>
        <NextIntlClientProvider> 
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}