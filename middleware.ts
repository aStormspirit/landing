import { NextResponse, type NextRequest } from "next/server";
import { detectLocaleFromAcceptLanguage, isLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const locale = detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));
  const localizedPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const url = request.nextUrl.clone();
  url.pathname = localizedPath;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
