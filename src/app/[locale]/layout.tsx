import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { Raleway } from 'next/font/google'

import Navbar from '@/components/Navbar/Navbar';

import '../../styles/styles.css'
import { routing } from '@/i18n/routing';
import VideoBackgroundWrapper from '@/components/VideoBackgroundWrapper';

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
    weight: ['400', '700'],
})

type Props = {
    children: ReactNode;
    params: Promise<{ locale: Locale }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html className="h-full" lang={locale}>
            <head>
                <title>Michael Portfolio</title>
                <link rel="icon" href="/svg/svg_personal_github.svg" type="image/svg+xml" />
                <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
            </head>
            <body className={`${raleway.variable} font-sans`}>
                <div className='flex'>


                    <NextIntlClientProvider locale={locale} messages={messages}>
 
                        <VideoBackgroundWrapper> 
                        <Navbar />
                        <main className='block w-full h-full overflow-auto'>
                            {children}
                        </main>
                        </VideoBackgroundWrapper>
                    </NextIntlClientProvider>

                    {/* <NextIntlClientProvider locale={locale} messages={messages}>
                        <VideoBackgroundWrapper> 
                            <main className='flex-none'>
                                {children}
                            </main>
                        </VideoBackgroundWrapper>
                    </NextIntlClientProvider> */}
                </div>
            </body>
        </html>
    );
}