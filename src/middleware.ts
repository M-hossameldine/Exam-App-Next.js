import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const AUTH_ROUTES = ["/login", "/signup", "/forgot-password"];
const PUBLIC_ROUTES = ["/", ...AUTH_ROUTES];
const DEFAULT_PROTECTED_ROUTE = "/home";

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const isPublicRoute = PUBLIC_ROUTES.includes(request.nextUrl.pathname);
  const isAuthRoute = AUTH_ROUTES.includes(request.nextUrl.pathname);

  if (!isPublicRoute) {
    if (token) return NextResponse.next();

    const redirectUrl = new URL("/login", request.nextUrl.origin);

    redirectUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);

    return NextResponse.redirect(redirectUrl);
  }

  if (!isAuthRoute) {
    return NextResponse.next();
  }

  if (!token) return NextResponse.next();

  return NextResponse.redirect(
    new URL(DEFAULT_PROTECTED_ROUTE, request.nextUrl.origin)
  );
}
