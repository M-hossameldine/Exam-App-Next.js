import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

import {
  DEFAULT_AUTHORIZED_ROUTE,
  PUBLIC_ROUTES,
  AUTH_ROUTES,
} from './lib/constants/settings.constants';

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const isPublicRoute = PUBLIC_ROUTES.includes(request.nextUrl.pathname);
  const isAuthRoute = AUTH_ROUTES.includes(request.nextUrl.pathname);

  if (!isPublicRoute) {
    if (token) return NextResponse.next();

    const redirectUrl = new URL('/login', request.nextUrl.origin);

    redirectUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);

    return NextResponse.redirect(redirectUrl);
  }

  if (!isAuthRoute) {
    return NextResponse.next();
  }

  if (!token) return NextResponse.next();

  return NextResponse.redirect(
    new URL(DEFAULT_AUTHORIZED_ROUTE, request.nextUrl.origin)
  );
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
