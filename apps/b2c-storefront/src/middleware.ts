import { NextRequest, NextResponse } from 'next/server'

const SUPPORTED_LOCALES = ['en', 'fr', 'it', 'es', 'de']
const DEFAULT_LOCALE = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // No locale in path — rewrite to default
  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
}
