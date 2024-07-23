import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { availableLocales } from './utils/translationProvider';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const LanguageParser = require('accept-language-parser');

export function middleware(request: NextRequest) {
  const cookieLanguage = request.cookies.get('NEXT_LOCALE'); // Saved language has priority
  let browserLanguages = LanguageParser.parse(
    request.headers.get('Accept-Language')
  ); // if no language is saved, we use the browser language

  browserLanguages = browserLanguages.filter((item: { code: string }) =>
    availableLocales.includes(item.code)
  );
  const lang = request.nextUrl.pathname.split('/')[1];
  if (!lang) {
    if (cookieLanguage && availableLocales.includes(cookieLanguage.value)) {
      return NextResponse.redirect(
        `${request.nextUrl.origin}/${cookieLanguage.value}/${
          request.nextUrl.pathname
        }?${request.nextUrl.searchParams.toString()}`
      );
    }
    if (browserLanguages.length > 0) {
      return NextResponse.redirect(
        `${request.nextUrl.origin}/${browserLanguages[0].code}/${
          request.nextUrl.pathname
        }?${request.nextUrl.searchParams.toString()}`
      );
    }
    return NextResponse.redirect(
      `${request.nextUrl.origin}${request.nextUrl.pathname.replace(
        lang,
        'en'
      )}?${request.nextUrl.searchParams.toString()}`
    );
  }
  if (lang.length === 2) {
    if (!availableLocales.includes(lang)) {
      if (cookieLanguage && availableLocales.includes(cookieLanguage.value)) {
        return NextResponse.redirect(
          `${request.nextUrl.origin}${request.nextUrl.pathname.replace(
            lang,
            cookieLanguage.value
          )}?${request.nextUrl.searchParams.toString()}`
        );
      }
      if (browserLanguages.length > 0) {
        return NextResponse.redirect(
          `${request.nextUrl.origin}${request.nextUrl.pathname.replace(
            lang,
            browserLanguages[0].code
          )}?${request.nextUrl.searchParams.toString()}`
        );
      }
      return NextResponse.redirect(
        `${request.nextUrl.origin}${request.nextUrl.pathname.replace(
          lang,
          'en'
        )}?${request.nextUrl.searchParams.toString()}`
      );
    }
  } else {
    return NextResponse.redirect(
      `${request.nextUrl.origin}/xx/${
        request.nextUrl.pathname
      }?${request.nextUrl.searchParams.toString()}`
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|fonts|examples|images|videos|[\\w-]+\\.\\w+).*)'],
};
