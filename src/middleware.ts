import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Obtener la ruta actual y el idioma
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = ['en', 'es'].every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  )

  // Si falta el locale, redirigir al locale por defecto
  if (pathnameIsMissingLocale) {
    const locale = 'es' // Locale por defecto
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/).*)',
  ],
}