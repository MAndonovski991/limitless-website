/* eslint-disable @next/next/next-script-for-ga */

/* eslint-disable @next/next/no-page-custom-font */

import React from 'react';
import 'react-material-symbols/dist/rounded.css';

import Link from 'next/link';
import Image from 'next/image';

import { MaterialSymbol } from 'react-material-symbols';
import logoWhite from '../../assets/images/logo-side-white.png';

import Header from '../../components/header';
import { useTranslation } from '../../utils/translationProvider';
import CookieConsentPopup from '../../components/cookieConsent';

import '../../styles/globals.scss';

import { headers } from 'next/headers';
import { SessionProvider } from 'next-auth/react';
import { NextAuthProvider } from '../../utils/nextAuthProvider';
import { Theme } from '../../lib/antd';

export const metadata = {
  openGraph: {
    images: [
      {
        url: '/images/og-cover.webp',
      },
    ],
  },
};

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const t = useTranslation(params.locale);
  const headersList = headers();
  const path = headersList.get('x-invoke-path')?.split('/');

  const showHeader = path && path[2] !== 'admin';
  const showFooter = path && path[2] !== 'admin';

  return (
    <html lang={params.locale}>
      <head>
        <title>{t('global.pageTitle')}</title>
        <meta name="description" content={t('global.pageDescription')} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3557519,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
							
							window.onload = function(e){ 
								if(window.devicePixelRatio < 1)
								document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio));
							}
							`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJRR9PG');
        `,
          }}
        />
        <script
          async
          src="https://www.google.com/recaptcha/api.js?render=6Lcy67YlAAAAAIiL3_jJVgGE5wxa6ZPbQCzOFzXS"
        />
      </head>
      <Theme>
        <body className="w-full h-fit bg-white">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KJRR9PG"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="google-tag-manager"
            />
          </noscript>

          <main className="overflow-x-hidden h-fit w-full">
            {showHeader && <Header params={params} />}
            <NextAuthProvider>{children}</NextAuthProvider>
            <div className=" relative flex items-center w-full justify-center text-white font-bold text-4xl h-fit"></div>
            {showFooter && (
              <footer className="flex flex-col justify-between items-center gap-12 bg-primary text-white p-4 lg:p-14 lg:py-0 pb-28">
                <div className="flex flex-col lg:flex-row items-start lg:items-start justify-evenly gap-20 lg:gap-8 text-sm w-full p-8">
                  <div className="flex flex-col gap-3 lg:text-end">
                    <Link
                      href={`${params.locale}`}
                      className="col-span-2 flex items-center justify-start pb-4"
                    >
                      <Image
                        src={logoWhite}
                        width={250}
                        height={100}
                        className="max-h-full transition-all duration-300 ease-in-out"
                        alt="Limitless Logo"
                      />
                    </Link>
                    <div className="font-bold uppercase tracking-wide mt-2">
                      Follow Us On
                    </div>
                    <div className="flex gap-4 lg:justify-end">
                      <div className="flex items-start gap-1">
                        <a
                          target="_blank"
                          href="https://www.facebook.com/limitlesssolutionsmacedonia"
                          rel="noreferrer"
                        >
                          <Image
                            src="/images/icons/facebook.png"
                            alt="Facebook"
                            width={22}
                            height={22}
                          />
                          {/* <p className="-mt-1">Facebook</p> */}
                        </a>
                      </div>
                      <div className="flex items-start gap-1">
                        <a
                          target="_blank"
                          href="https://www.instagram.com/limitlesssolutionsmk/"
                          rel="noreferrer"
                        >
                          <Image
                            src="/images/icons/instagram.png"
                            alt="Instagram"
                            width={22}
                            height={22}
                          />
                          {/* <p className="-mt-1">Instagram</p> */}
                        </a>
                      </div>
                      <div className="flex items-start gap-1">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/company/limitless-solutions-2019/"
                          rel="noreferrer"
                        >
                          <Image
                            src="/images/icons/linkedin.png"
                            alt="LinkedIn"
                            width={22}
                            height={22}
                          />
                          {/* <p className="-mt-1">LinkedIn</p> */}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      className="font-bold text-sm tracking-wide uppercase"
                      href="/bpo"
                    >
                      {t('header.bpo')}
                    </Link>
                    <Link
                      className="font-bold text-sm tracking-wide uppercase"
                      href="/eor"
                    >
                      {t('header.eor')}
                    </Link>
                    <Link
                      className="font-bold text-sm tracking-wide uppercase"
                      href="/recruitment"
                    >
                      {t('header.internationalRecruitment')}
                    </Link>
                    <Link
                      className="font-bold text-sm tracking-wide uppercase"
                      href="/solutions"
                    >
                      {t('header.consultancy')}
                    </Link>
                    <Link
                      className="font-bold text-sm tracking-wide uppercase"
                      href="/careers"
                    >
                      {t('header.jobs')}
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      className="font-bold text-sm tracking-wide uppercase pb-2"
                      href="/contact"
                    >
                      {t('header.contactUs')}
                    </Link>
                    <div className="flex items-start gap-1">
                      <MaterialSymbol icon="phone" />
                      <a href="tel:+12819361365">
                        <p className="-mt-1 text-xs">+1 281 936 1365</p>
                      </a>
                    </div>
                    <div className="flex items-start gap-1">
                      <MaterialSymbol icon="phone" />
                      <a href="tel:+38975272392">
                        <p className="-mt-1 text-xs">+389 75 272 392</p>
                      </a>
                    </div>
                    <div className="flex items-start gap-1">
                      <MaterialSymbol icon="mail" />
                      <a href="mailto:info@limitless.com.mk" rel="noreferrer">
                        <p className="-mt-1 text-xs">info@limitless.com.mk</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      className="font-bold text-sm tracking-wide uppercase"
                      href="/about-us"
                    >
                      {t('header.aboutUs')}
                    </Link>
                    <div className="flex items-start gap-1">
                      <MaterialSymbol icon="location_on" />
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Limitless+Solutions/@41.9953477,21.4242226,17z/data=!4m6!3m5!1s0x1354152db32f64ef:0x346b3966ba41f303!8m2!3d41.9953477!4d21.4242226!16s%2Fg%2F11v3g5fqd_?entry=ttu"
                        rel="noreferrer"
                      >
                        <p className="-mt-1 text-xs">
                          Dimitrie Chupovski 5-1
                          <br />
                          1000 Skopje
                          <br />
                          Republic of Macedonia
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            )}
          </main>

          <CookieConsentPopup locale={params.locale} />
        </body>
      </Theme>
    </html>
  );
};

export default Layout;
