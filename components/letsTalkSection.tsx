import React from 'react';

import Image from 'next/image';
import ContactForm from './contactForm';
import { useTranslation } from '../utils/translationProvider';
import { MaterialSymbol } from 'react-material-symbols';
import Link from 'next/link';

const LetsTalkSection = ({ locale }: { locale: string }) => {
  const t = useTranslation(locale);
  return (
    <section className="overflow-hidden flex flex-col items-center lg:flex-row gap-8  justify-center px-4  lg:px-36 py-10 bg-slate-100 -z-[1]">
      <div className="overflow-hidden flex flex-col lg:flex-row items-stretch rounded-3xl shadow-2xl">
        <div className="w-full flex flex-col gap-8 max-lg:px-8 p-10 relative bg-primary">
          <Image
            className="absolute left-0 top-0 w-full h-full object-cover zoomIn mix-blend-soft-light opacity-20 "
            width={1000}
            height={1000}
            alt="Handshake"
            src="/images/connect1.webp"
          />
          <h1 className="text-white font-bold  text-2xl lg:text-5xl z-[2]">
            {t('contactSection.title')}
          </h1>
          <p className="whitespace-pre-wrap leading-normal text-white text-xl z-[2]">
            {t('contactSection.description')}
          </p>

          <div className="flex flex-col gap-3 text-white text-sm opacity-70 z-[2]">
            <div className="flex items-start gap-1">
              <MaterialSymbol icon="phone" />
              <a href="tel:+12819361365">
                <p className="-mt-1">+1 281 936 1365</p>
              </a>
            </div>
            <div className="flex items-start gap-1">
              <MaterialSymbol icon="phone" />
              <a href="tel:+38975272392">
                <p className="-mt-1">+389 75 272 392</p>
              </a>
            </div>
            <div className="flex items-start gap-1">
              <MaterialSymbol icon="mail" fill />
              <a href="mailto:info@limitless.com.mk" rel="noreferrer">
                <p className="-mt-1">info@limitless.com.mk</p>
              </a>
            </div>
            <div className="flex items-start gap-1">
              <MaterialSymbol icon="location_on" fill />
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Limitless+Solutions/@41.9953477,21.4242226,17z/data=!4m6!3m5!1s0x1354152db32f64ef:0x346b3966ba41f303!8m2!3d41.9953477!4d21.4242226!16s%2Fg%2F11v3g5fqd_?entry=ttu"
                rel="noreferrer"
              >
                <p className="-mt-1">
                  Mitropolit Teodosij Gologanov 6/1-14
                  <br />
                  1000 Skopje
                  <br />
                  Republic of Macedonia
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="z-[2] w-full bg-white p-4 lg:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;
