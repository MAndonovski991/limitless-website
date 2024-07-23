'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import lax from 'lax.js';

import { MaterialSymbol } from 'react-material-symbols';

import { useTranslation } from '../../../utils/translationProvider';

import Link from 'next/link';
import CandidateDatabaseButton from './candidateDatabaseButton';
import { Spin } from 'antd';
import ScrollToTop from '../../../components/scrollToTop';

interface JobOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  active: boolean;
  deleted: boolean;
}

const Content = () => {
  const params = useParams();
  const t = useTranslation(params && (params.locale as string));
  const [jobOffers, setJobOffers] = useState<JobOffer[]>();
  const [jobOffersLoading, setJobOffersLoading] = useState(false);

  useEffect(() => {
    lax.init();

    lax.addDriver('scrollY', () => window.scrollY);

    lax.addElements(
      '.moveLeftRight',
      {
        scrollY: {
          translateX: [
            ['elInY', 'elCenterY', 'elOutY'],
            [-100, 0, 100],
            { easing: 'easeInOutQuad' },
          ],
          opacity: [
            ['elInY', 'elCenterY', 'elOutY'],
            [0, 1, 0],
            { easing: 'easeInOutQuad' },
          ],
        },
      },
      []
    );

    lax.addElements(
      '.delayScroll',
      {
        scrollY: {
          translateY: [
            ['elInY', 'elOutY'],
            {
              768: ['-30', '30'],
              769: ['-40', 'index*30+30'],
            },
            { easing: 'easeInOutQuad' },
          ],
        },
      },
      []
    );

    lax.addElements(
      '.moveInCards',
      {
        scrollY: {
          translateY: [
            ['elInY+index*40+100', 'elInY+index*40+300'],
            {
              768: [0, 0],
              769: ['-40', 0],
            },
            { easing: 'easeInOutQuad' },
          ],
          translateX: [
            ['elInY', 'elCenterY'],
            {
              768: ['-40', 0],
              769: [0, 0],
            },
            { easing: 'easeInOutQuad' },
          ],
          opacity: [
            ['elInY+index*20+100', 'elInY+index*20+300'],
            {
              768: [0, 1],
              769: [0, 1],
            },
            { easing: 'easeInOutQuad' },
          ],
        },
      },
      []
    );

    lax.addElements(
      '.delayScrollNoIndex',
      {
        scrollY: {
          translateY: [
            ['elInY', 'elOutY'],
            [Math.random() * -10 - 10, Math.random() * 100 + 10],
            { easing: 'easeInOutQuad' },
          ],
        },
      },
      []
    );

    lax.addElements(
      '.zoomIn',
      {
        scrollY: {
          scale: [['elInY', 'elOutY'], [1, 1.15], { easing: 'easeInOutQuad' }],
        },
      },
      []
    );

    lax.addElements(
      '.scrollFullWidth',
      {
        scrollY: {
          translateX: [
            ['elCenterY-200', 'elOutY - screenHeight/2'],
            [0, 'screenWidth-elWidth'],
            { easing: 'easeInOutQuad' },
          ],
        },
      },
      []
    );

    lax.addElements(
      '.moveToRight',
      {
        scrollY: {
          translateX: [
            ['elInY', 'elCenterY-200'],
            [-100, 0],
            { easing: 'easeInOutQuad' },
          ],
          opacity: [
            ['elInY', 'elCenterY-200'],
            [0, 1],
            { easing: 'easeInOutQuad' },
          ],
        },
      },
      []
    );
    lax.addElements(
      '.moveToLeft',
      {
        scrollY: {
          translateX: [
            ['elInY', 'elCenterY-200'],
            [100, 0],
            { easing: 'easeInOutQuad' },
          ],
          opacity: [
            ['elInY', 'elCenterY-200'],
            [0, 1],
            { easing: 'easeInOutQuad' },
          ],
        },
      },
      []
    );

    setJobOffersLoading(true);
    fetch(`/api/joboffer?activeOnly=true`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setJobOffersLoading(false);
        setJobOffers(data);
      });
  }, []);

  return (
    <div className=" min-h-screen">
      <ScrollToTop />
      <div className="max-lg:min-h-fit h-[25svh] lg:h-[25svh] bg-primary relative w-full flex flex-col md:flex-row justify-start lg:justify-start overflow-hidden px-8 lg:px-36 pt-[9%] pb-20 lg:pb-36 gap-4 rounded-b-3xl">
        <Image
          className="absolute left-0 top-0 w-full h-full object-cover zoomIn mix-blend-multiply opacity-20 "
          width={1000}
          height={1000}
          alt="Jobs"
          src="/images/recruitment-header.jpg"
        />
        <div className="flex flex-col gap-8 absolute top-1/2 -translate-y-[1%]">
          <h1
            className=" text-3xl lg:text-5xl text-white font-bold leading-tight text-left w-[90%] lg:w-[65%] z-[2]"
            dangerouslySetInnerHTML={{ __html: t('pages.careers.title') }}
          />
        </div>
      </div>
      <section className="flex flex-col gap-4 w-full px-8 lg:px-36 py-10 mb-12">
        <p className="tracking-wide uppercase opacity-50 font-bold text-xs">
          {t('pages.careers.activeJobs')}
        </p>
        {!jobOffersLoading &&
          jobOffers &&
          jobOffers?.length > 0 &&
          jobOffers.map(job => (
            <Link href={`/careers/${job.id}`}>
              <div className="bg-slate-100 hover:bg-primary w-full  text-slate-800 hover:text-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all ease-in-out duration-300 p-4 lg:p-8 overflow-hidden flex flex-col lg:flex-row lg:items-end gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold text-left lg:max-w-3xl">
                    {job.title}
                  </p>
                  <div className="flex items-center gap-2 tracking-wide uppercase opacity-50 font-bold text-xs">
                    <p>{job.subtitle}</p>
                  </div>
                </div>
                <p className="flex items-center text-accent gap-2 font-bold text-right ml-auto">
                  Details <MaterialSymbol icon="arrow_right_alt" />
                </p>
              </div>
            </Link>
          ))}
        {!jobOffersLoading && (!jobOffers || jobOffers?.length === 0) && (
          <div className="w-full flex justify-center items-center rounded-2xl bg-slate-50 p-8 mt-4 mb-0 border-2 border-dashed">
            There are no active listings currently
          </div>
        )}
        {jobOffersLoading && <Spin size="large" className="pt-10" />}
      </section>
      <section className="px-8 lg:px-96 flex justify-center relative py-20">
        <div className="flex justify-center relative overflow-hidden bg-primary rounded-2xl p-10 lg:p-12 w-full zoomIn z-0">
          <div className="flex flex-col gap-8 max-w-4xl justify-center items-center z-[1]">
            <p
              className="text-center text-2xl lg:text-2xl text-white lg:max-w-xl font-bold m-0"
              dangerouslySetInnerHTML={{
                __html: t('pages.careers.candidateDatabase.title'),
              }}
            />

            <p className="text-center text-white text-sm ">
              {t('pages.careers.candidateDatabase.description')}
            </p>
            <CandidateDatabaseButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
