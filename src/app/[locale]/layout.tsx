import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { Raleway } from 'next/font/google'
import type { Metadata } from 'next';

import Navbar from '@/components/Navbar/Navbar';

import '../../styles/styles.css'
import { routing } from '@/i18n/routing';
import VideoBackgroundWrapper from '@/components/VideoBackgroundWrapper';
import { LockscreenProvider } from '@/contexts/LockscreenContext';
import Lockscreen from '@/components/Lockscreen/Lockscreen';

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
    weight: ['400', '700'],
})

export const metadata: Metadata = {
    title: 'Michael Portfolio',
};

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
            <body className={`${raleway.variable} font-sans`}>
                <div className='flex'>
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <LockscreenProvider>
                            <Lockscreen />
                            <VideoBackgroundWrapper>
                                <Navbar />
                                <main className='block w-full h-full overflow-auto'>
                                    {children}
                                </main>
                            </VideoBackgroundWrapper>
                        </LockscreenProvider>
                    </NextIntlClientProvider>
                </div>
            </body>
        </html>
    );
}