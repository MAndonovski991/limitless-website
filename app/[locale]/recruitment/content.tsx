'use client';

import { useEffect } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { MaterialSymbol } from 'react-material-symbols';

import lax from 'lax.js';
import Marquee from 'react-fast-marquee';

import logo from '../../../assets/images/logo-side-white.png';

import { useTranslation } from '../../../utils/translationProvider';

import LetsTalkSection from '../../../components/letsTalkSection';
import { Carousel } from 'antd';
import ScrollToTop from '../../../components/scrollToTop';

const Content = () => {
  const params = useParams();
  const t = useTranslation(params && (params.locale as string));

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
            ['elCenterY-200', 'elOutY - screenHeight/1.5'],
            [0, '-elWidth-100'],
            { easing: 'easeInOutQuad' },
          ],
        },
      },
      []
    );

    lax.addElements(
      '.scrollFullHeight',
      {
        scrollY: {
          translateY: [
            ['elInY+200', 'elInY+screenHeight/1.1'],
            [0, '-elHeight+320'],
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
  }, []);

  return (
    <div className=" min-h-screen">
      <ScrollToTop />
      <div className="max-lg:min-h-fit h-[70svh] lg:h-[70svh] bg-primary relative w-full flex flex-col md:flex-row justify-start lg:justify-start overflow-hidden px-4 lg:px-28 gap-4 rounded-b-3xl">
        <video
          className="absolute saturate-0 left-0 top-0 w-full h-full object-cover mix-blend-soft-light opacity-30"
          width={1000}
          height={1000}
          src="/videos/recruitment.mp4"
          autoPlay
          controls={false}
          loop
          muted
        />
        <div className="flex flex-col gap-8 absolute bottom-1/2 translate-y-[80%]">
          <h1
            className=" text-3xl lg:text-5xl text-white font-bold leading-tight text-left w-[90%] lg:w-[60%] z-[2]"
            dangerouslySetInnerHTML={{ __html: t('pages.recruitment.title') }}
          />
        </div>
      </div>
      <section className="bg-white text-primary flex  text-center flex-col justify-center items-center gap-10 pt-20 px-8 lg:px-12 h-fit pb-20">
        <p
          className="text-2xl lg:text-3xl font-bold"
          dangerouslySetInnerHTML={{
            __html: t('pages.recruitment.recruitmentSupport.title'),
          }}
        />
        <p
          className="text-lg lg:text-xl z-[2] lg:px-36"
          dangerouslySetInnerHTML={{
            __html: t('pages.recruitment.recruitmentSupport.description'),
          }}
        />
      </section>
      <section id="recruitment" className="w-full h-fit">
        <section className="bg-primary text-white flex flex-col items-center gap-10 py-10">
          <div className=" w-full lg:px-36 px-4 flex flex-col-reverse lg:flex-row justify-center items-center gap-8">
            <div className="w-full overflow-hidden h-96 bg-accent p-4 rounded-2xl">
              <Marquee
                className="w-full overflow-y-hidden flex items-center text-primary"
                direction="left"
                speed={250}
              >
                <div className="flex items-center w-fit gap-20">
                  <MaterialSymbol icon="captive_portal" fill size={320} />
                  <MaterialSymbol icon="groups" fill size={320} />
                  <MaterialSymbol icon="local_shipping" fill size={320} />
                  <MaterialSymbol icon="support_agent" fill size={320} />
                  <Image
                    width={300}
                    height={100}
                    className=" object-contain mr-20"
                    src={logo}
                    alt="Logo"
                  />
                </div>
              </Marquee>
            </div>
            <div className="w-full flex flex-col gap-4">
              <p
                className="text-2xl lg:text-3xl font-bold"
                dangerouslySetInnerHTML={{
                  __html: t('pages.recruitment.trustedPartner.title'),
                }}
              />
              <p className="whitespace-pre-wrap text-lg">
                {t('pages.recruitment.trustedPartner.description')}
              </p>
            </div>
          </div>
        </section>
        <section className="bg-slate-100 text-primary flex flex-col items-center gap-10 py-10">
          <p className="text-2xl lg:text-3xl font-bold lg:px-36">
            Success Stories
          </p>
          <div className=" w-full lg:px-36 px-4 flex flex-col lg:flex-row justify-center items-center gap-8">
            <video
              controls
              width={400}
              height={240}
              className="rounded-xl overflow-hidden w-full max-w-3xl h-auto"
            >
              <source src="/videos/success-stories.mp4" type="video/mp4" />
            </video>
          </div>
          <Marquee pauseOnHover speed={80}>
            <div className="flex items-center gap-4 h-72 lg:h-96 py-10">
              <Image
                alt="Success Stories 1"
                src="/images/success-stories/1.webp"
                height={500}
                width={800}
                className="rounded-2xl overflow-hidden object-cover h-full w-auto shadow-lg"
              />

              <Image
                alt="Success Stories 2"
                src="/images/success-stories/2.webp"
                height={500}
                width={800}
                className="rounded-2xl overflow-hidden object-cover h-full w-auto shadow-lg"
              />
              <Image
                alt="Success Stories 3"
                src="/images/success-stories/3.webp"
                height={500}
                width={800}
                className="rounded-2xl overflow-hidden object-cover h-full w-auto shadow-lg"
              />

              <Image
                alt="Success Stories 4"
                src="/images/success-stories/4.webp"
                height={500}
                width={800}
                className="rounded-2xl overflow-hidden object-cover h-full w-auto shadow-lg"
              />
              <Image
                alt="Success Stories 5"
                src="/images/success-stories/5.webp"
                height={500}
                width={800}
                className="rounded-2xl overflow-hidden object-cover h-full w-auto shadow-lg"
              />
              <Image
                alt="Success Stories 6"
                src="/images/truck.webp"
                height={500}
                width={800}
                className="rounded-2xl overflow-hidden object-cover h-full w-auto shadow-lg mr-3"
              />
            </div>
          </Marquee>
        </section>
        <section className="lg:px-36 py-10">
          <p className="font-bold text-primary text-2xl lg:text-4xl px-8 lg:px-36 z-[1] text-center">
            Testimonials
          </p>
          <div className=" relative w-full overflow-hidden p-2 lg:p-4 lg:px-48">
            <MaterialSymbol
              icon="format_quote"
              fill
              className="text-primary absolute rotate-180 -right-10 -bottom-10 hidden md:block opacity-5"
              size={256}
            />
            <MaterialSymbol
              icon="format_quote"
              fill
              className="text-primary absolute -left-10 -top-10 hidden md:block opacity-5"
              size={256}
            />
            <style>
              {`
							.slick-dots li button {
								background: black !important;
							}`}
            </style>
            <Carousel
              dotPosition="bottom"
              autoplay
              className="h-full w-full mt-20"
            >
              <div className=" rounded-xl p-8 flex flex-col lg:flex-row h-full w-full z-[1] gap-4">
                <div className="flex flex-col gap-8">
                  <div className=" leading-normal lg:text-xl tracking-wide bg-slate-100 p-8 rounded-2xl">
                    I highly recommend Limitless Solutions for their exceptional
                    recruitment services. Their professionalism, expertise, and
                    seamless communication have made our hiring process a
                    breeze. Thanks to their efforts, we have found the perfect
                    candidates for our needs. It has been a pleasure working
                    with such a competent and reliable agency.
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      className="object-cover rounded-full aspect-square h-14 w-14"
                      src="/images/testimonials/dalius.webp"
                      alt="Dalius"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-1">
                      <div className="font-bold leading-none text-xl">
                        Dalius Brasas
                      </div>
                      <div className="opacity-70 font-bold text-xs">
                        European Transport Manager, Europa Worldwide Group
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" rounded-xl p-8 flex flex-col lg:flex-row h-full w-full z-[1] gap-4">
                <div className="flex flex-col gap-8">
                  <div className=" leading-normal lg:text-xl tracking-wide bg-slate-100 p-8 rounded-2xl">
                    Working with Limitless has been our game-changing
                    experience. Their expertise in recruiting top-notch talent
                    from overseas has helped us overcome challenges and optimize
                    our operations. Exceptional professionalism and dedication
                    set a solid foundation for future growth. We highly
                    recommend Limitless Solutions for remarkable recruitment
                    results.
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      className="object-cover rounded-full aspect-square h-14 w-14"
                      src="/images/testimonials/steve-agk.webp"
                      alt="Steve"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-1">
                      <div className="font-bold leading-none text-xl">
                        Steve Kirovski
                      </div>
                      <div className="opacity-70 font-bold text-xs">
                        Founder & CEO, AGK Logistics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {params && <LetsTalkSection locale={params.locale as string} />}
      </section>
    </div>
  );
};

export default Content;
