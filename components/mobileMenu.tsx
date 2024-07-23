'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from '../utils/translationProvider';
import LanguageSelector from './languageSelector';

const MobileMenu = ({ locale }: { locale: string }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const t = useTranslation(locale);
  return (
    <>
      <button className="pr-2" type="button" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div
        id="mobile-menu"
        className={` z-50 transition-all duration-500 ease-in-out fixed top-0 right-0 h-screen
      ${open ? 'w-screen' : 'w-0'} bg-white overflow-hidden text-primary`}
      >
        <div className="w-full h-full p-2">
          <div className="flex flex-col w-full h-full justify-start gap-4 pt-20 overflow-y-auto pb-36">
            <div className="px-4">
              <LanguageSelector locale={locale} />
            </div>
            <Menu
              onSelect={() => setOpen(false)}
              mode="inline"
              items={[
                {
                  key: 'home',
                  label: t('header.home'),
                  onClick: () => {
                    router.push(`/`);
                  },
                },
                {
                  key: 'about-us',
                  label: t('header.aboutUs'),
                  onClick: () => {
                    router.push(`/about-us`);
                  },
                },
                {
                  key: 'bpo',
                  label: t('header.bpo'),
                  onClick: () => {
                    router.push(`/bpo`);
                  },
                },
                {
                  key: 'eor',
                  label: t('header.eor'),
                  onClick: () => {
                    router.push(`/eor`);
                  },
                },
                {
                  key: 'workAbroad',
                  label: t('header.limitlessInternational'),
                  onClick: () => {
                    router.push(`/recruitment`);
                  },
                },
                {
                  key: 'consultancy',
                  label: t('header.consultancy'),
                  onClick: () => {
                    router.push(`/solutions`);
                  },
                },
                {
                  key: 'jobs',
                  label: t('header.jobs'),
                  onClick: () => {
                    router.push(`/careers`);
                  },
                },
                {
                  key: 'contact',
                  label: t('header.contactUs'),
                  onClick: () => {
                    router.push(`/contact`);
                  },
                },
              ]}
            />
          </div>
          <button
            className="absolute top-6 right-6"
            type="button"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon size="1x" icon={faX} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
