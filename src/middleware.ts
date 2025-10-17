import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  let locale = request.cookies.get("NEXT_LOCALE")?.value;

  if (!locale) {
    locale = routing.defaultLocale;
  }

  // Persist cookie globally (important on Vercel)
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", locale, {
    path: "/en",
    httpOnly: false,
    sameSite: "lax",
  });

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(fr|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
