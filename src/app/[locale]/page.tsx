'use client'

import { useRouter, usePathname } from 'next/navigation'

export function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const changeLocale = (newLocale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div>
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('es')}>Español</button>
    </div>
  )
}