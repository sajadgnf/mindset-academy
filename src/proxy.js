import { NextResponse } from "next/server";

let locales = ["en", "fa"];

function getLocale(request) {
  const acceptLang = request.headers.get("accept-language") || "";

  if (acceptLang.includes("fa")) return "fa";
  return "fa";
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}/${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
