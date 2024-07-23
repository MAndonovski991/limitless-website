'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Popover } from 'antd';

import { useEffect, useState } from 'react';
import { RouteProps } from '../types/routeLocaleProps';

import LanguageSelector from './languageSelector';
import { useTranslation } from '../utils/translationProvider';

import logo from '../assets/images/logo-side.png';
import logoWhite from '../assets/images/logo-side-white.png';

import MobileMenu from './mobileMenu';

const Header = ({ params }: RouteProps) => {
  const t = useTranslation(params.locale);
  const [topScroll, setTopScroll] = useState(0);

  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    const scroll = () => {
      const { pageYOffset, scrollY } = window;
      setTopScroll(scrollY);
    };
    document.addEventListener('scroll', scroll, options);
    // remove event on unmount to prevent a memory leak
    // eslint-disable-next-line no-unused-expressions
    () => document.removeEventListener('scroll', scroll);
  }, []);
  return (
    <>
      <header className="hidden lg:block fixed top-0 w-full p-4 px-24 z-10">
        <div
          className={`grid grid-cols-12 gap-6 py-4 m-auto px-12  ${
            topScroll > 50
              ? 'bg-white text-primary shadow-primary/30'
              : 'bg-transparent text-white shadow-transparent'
          } z-10 transition-all duration-300 ease-in-out rounded-full shadow-2xl`}
        >
          <Link
            href={`/${params.locale}`}
            className="col-span-2 flex items-center justify-start"
          >
            <Image
              src={topScroll > 50 ? logo : logoWhite}
              className="max-h-full transition-all duration-300 ease-in-out"
              alt="Limitless Logo"
            />
          </Link>
          <nav className="col-span-10 flex items-center justify-end gap-6 text-xs text-center uppercase font-bold tracking-wider">
            <Link
              className=" hover:px-3 transition-[padding] duration-300"
              href="/about-us"
            >
              {t('header.aboutUs')}
            </Link>
            <Link
              className=" hover:px-3 transition-[padding] duration-300"
              href="/bpo"
            >
              {t('header.bpo')}
            </Link>
            <Link
              className=" hover:px-3 transition-[padding] duration-300"
              href="/eor"
            >
              {t('header.eor')}
            </Link>
            <Link
              className=" hover:px-3 transition-[padding] duration-300"
              href="/recruitment"
            >
              {t('header.limitlessInternational')}
            </Link>
            <Link
              className=" hover:px-3 transition-[padding] duration-300"
              href="/solutions"
            >
              {t('header.consultancy')}
            </Link>
            <Link
              className=" hover:px-3 transition-[padding] duration-300"
              href="/careers"
            >
              {t('header.jobs')}
            </Link>
            <Link
              className={` hover:px-5 transition-all duration-300 px-4 py-2 ${
                topScroll > 50 ? 'bg-accent' : 'bg-white'
              } rounded-full text-primary `}
              href="/contact"
            >
              {t('header.contactUs')}
            </Link>
          </nav>
        </div>
      </header>
      <header className="block lg:hidden fixed top-0 w-full transition-all duration-300 ease-in-out z-10 p-2">
        <div
          className={`grid grid-cols-12 px-4 py-4 w-full ${
            topScroll > 50
              ? 'bg-white text-primary shadow-primary/30'
              : 'bg-transparent text-white shadow-transparent'
          } transition-all duration-300 ease-in-out rounded-full shadow-2xl`}
        >
          <div className="col-span-4">
            <Image
              src={topScroll > 50 ? logo : logoWhite}
              className="max-h-full transition-all duration-300 ease-in-out"
              alt="Limitless Logo"
            />
          </div>
          <div className="col-span-8 flex items-center justify-end">
            <MobileMenu locale={params.locale} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
