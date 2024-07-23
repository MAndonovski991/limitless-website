'use client';

import { Button } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useTranslation } from '../utils/translationProvider';

export interface CookieConsentPopupProps {
  locale: string;
}

const CookieConsentPopup = ({ locale }: CookieConsentPopupProps) => {
  const [showCookie, setShowCookie] = useState(false);

  const t = useTranslation(locale);

  const consentCookies = (consent: boolean) => {
    localStorage.setItem('cookieConsent', consent ? 'true' : 'false');
    window.location.reload();
  };

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) setShowCookie(true);
  }, []);

  if (!showCookie) return null;

  return (
    <div
      style={{ boxShadow: '0px -12px 16px #00000022' }}
      className=" rounded-3xl bg-white fixed bottom-0 w-full flex flex-col justify-center gap-4 p-4 py-12 lg:p-8 lg:px-[9vw] overflow-clip text-black z-30"
    >
      <div className="text-3xl font-extrabold">
        <Image
          alt="limitless-logo"
          className="mb-4"
          width={80}
          height={50}
          src="/logo-side.png"
        />
        <div>{t('global.cookies.title')}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: t('global.cookies.content') }} />
      <div className="flex items-center justify-end gap-2 w-full">
        <Button
          onClick={() => {
            consentCookies(false);
          }}
          ghost
        >
          {t('global.cookies.buttonDisagree')}
        </Button>
        <Button
          onClick={() => {
            consentCookies(true);
          }}
          type="primary"
        >
          {t('global.cookies.buttonAgree')}
        </Button>
      </div>
    </div>
  );
};

export default CookieConsentPopup;
