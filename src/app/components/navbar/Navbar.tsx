'use client'

import { useTranslations } from 'next-intl'

export default function Navbar() {
  const t = useTranslations('Navigation')

  return (
    <nav>
      <a href="/">{t('home')}</a>
      <a href="/about">{t('about')}</a>
      <a href="/projects">{t('projects')}</a>
    </nav>
  )
}