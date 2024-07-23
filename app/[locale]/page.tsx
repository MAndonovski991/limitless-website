'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { motion, Variants } from 'framer-motion';
import lax from 'lax.js';

import { MaterialSymbol } from 'react-material-symbols';

import { MutableRefObject, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { GlobeMethods, GlobeProps } from 'react-globe.gl';
import { Carousel } from 'antd';
import { RouteProps } from '../../types/routeLocaleProps';
import { useTranslation } from '../../utils/translationProvider';
import GlobalMapComponent from '../../components/globalMap';

import logoSymbol from '../../assets/images/logo-symbol.svg';

const GlobeComponent = dynamic(
  async () => {
    const { default: RQ } = await import('react-globe.gl');

    const Globe = ({
      forwardedRef,
      ...props
    }: GlobeProps & {
      forwardedRef: MutableRefObject<GlobeMethods | undefined>;
    }) => <RQ ref={forwardedRef} {...props} />;
    return Globe;
  },
  { ssr: false }
);

const loadVariants: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      ease: 'easeInOut',
    },
  },
};
const loadVariantsVertical: Variants = {
  hide: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

const globeArcs = [
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 31.2638905,
    endLng: -98.5456116,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 40.0796606,
    endLng: -89.4337288,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 40.2253569,
    endLng: -82.6881395,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 43.6211955,
    endLng: -84.6824346,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 43.9792797,
    endLng: -120.737257,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 41.7370229,
    endLng: -99.5873816,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 30.8124247,
    endLng: 34.8594762,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 38.9597594,
    endLng: 34.9249653,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 54.7023545,
    endLng: -3.2765753,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 49.7439047,
    endLng: 15.3381061,
    color: '#65b2e8',
  },
  {
    startLat: 44.3053476,
    startLng: 17.5961467,
    endLat: 41.6171214,
    endLng: 21.7168387,
    color: '#65b2e8',
  },
  {
    startLat: 49.4871968,
    startLng: 31.2718321,
    endLat: 41.6171214,
    endLng: 21.7168387,
    color: '#65b2e8',
  },
];

const Page = () => {
  const params = useParams();
  const t = useTranslation(params && (params.locale as string));

  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const [globeLoaded, setGlobeLoaded] = useState(false);

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

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.3;
      globeRef.current.controls().enabled = false;
      globeRef.current.pointOfView(
        { altitude: 1.4, lat: 41.6171214, lng: 21.7168387 },
        1000
      );

      const directionalLight = globeRef.current
        .scene()
        .children.find((obj3d: any) => obj3d.type === 'DirectionalLight');

      if (directionalLight) {
        directionalLight.intensity = 1;
        directionalLight.position.set(-5, 5, 1);
      }
    }
  }, [globeLoaded]);

  return (
    <div className="-z-[2]">
      <section className="h-[85vh] w-full flex flex-col justify-end lg:justify-center px-4 lg:px-36 pt-48 lg:pt-[5vh] gap-6 bg-primary rounded-b-3xl overflow-hidden relative">
        <div className="absolute left-0 lg:pl-[20vw] -bottom-5 top-0 w-full h-full">
          <GlobeComponent
            forwardedRef={globeRef}
            globeImageUrl="/images/world-map.webp"
            bumpImageUrl="/images/world-map-normal.webp"
            backgroundColor="#00000000"
            onGlobeReady={() => {
              setGlobeLoaded(true);
            }}
            arcsData={globeArcs}
            arcColor="color"
            arcDashLength={0.5}
            arcDashGap={0.1}
            arcDashAnimateTime={() => Math.random() * 2000 + 2000}
            key="g2"
          />
        </div>
        <h1 className="text-3xl lg:text-6xl font-bold text-white whitespace-pre-wrap mb-0 z-[3] leading-normal">
          {t('landing.headline')}
        </h1>
        <p className="text-white opacity-50 text-xl whitespace-pre-wrap z-[3] lg:max-w-2xl leading-normal">
          {t('landing.description')}
        </p>
        <div className="flex flex-col lg:flex-row pb-10 lg:pb-0 items-start lg:items-center gap-4 z-[3]">
          <Link
            className="px-10 py-4 font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out bg-accent text-primary rounded-full"
            href="./careers"
          >
            {t('landing.findAJob')}
            <MaterialSymbol icon="arrow_right_alt" />
          </Link>
          <Link
            className="px-10 py-4 font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out bg-white text-primary rounded-full"
            href="./contact"
          >
            {t('landing.findAnEmployee')}
            <MaterialSymbol icon="arrow_right_alt" />
          </Link>
        </div>
      </section>

      <section className="  w-full py-20 px-4 lg:px-36  text-primary">
        <div className="flex flex-col gap-8 delayScroll">
          <p
            className="text-3xl lg:text-5xl text-center mb-0 "
            dangerouslySetInnerHTML={{ __html: t('landing.tagline.title') }}
          />
          <p className="text-xl text-center">
            {t('landing.tagline.description')}
          </p>
        </div>
      </section>
      <section className="w-full pt-8 pb-20 flex flex-col lg:flex-row items-start z-[2] gap-10 lg:gap-6 px-8 lg:px-36">
        <Link href="./bpo">
          <div className="h-[400px] p-6 flex flex-col relative justify-start gap-4 hover:gap-10 transition-[gap] w-full shadow-lg overflow-hidden  rounded-xl  text-white">
            <MaterialSymbol icon="account_tree" fill size={64} />
            <div className="font-bold text-3xl leading-none max-w-xs">
              {t('landing.bpo.title')}
            </div>
            <div className="max-w-xs">{t('landing.bpo.description')}</div>
            <Image
              width={1100}
              height={1400}
              src="/images/businesspo2.webp"
              alt="business-process"
              className="absolute left-0 bottom-0 w-full h-full object-cover -z-[1]"
            />
            <div className="absolute left-0 top-0 w-full h-[400%] object-cover bg-gradient-to-b from-primary -z-[1]" />
          </div>
        </Link>
        <Link href="./eor">
          <div className="h-[400px] p-6 flex flex-col relative justify-start gap-4 hover:gap-10 transition-[gap] w-full shadow-lg overflow-hidden  rounded-xl  text-white">
            <Image
              width={950}
              height={1300}
              src="/images/ourstory.webp"
              alt="Our Story"
              className="absolute left-0 top-0 w-full h-full object-cover -z-[1]"
            />
            <div className="absolute left-0 top-0 w-full h-[350%] object-cover bg-gradient-to-b from-primary -z-[1]" />
            <MaterialSymbol icon="search" fill size={64} />
            <div className="font-bold text-3xl leading-none max-w-xs">
              {t('landing.eor.title')}
            </div>
            <div className="max-w-xs">{t('landing.eor.description')}</div>
          </div>
        </Link>
        <Link href="./recruitment">
          <div className="h-[400px] p-6 flex flex-col relative justify-start gap-4 hover:gap-10 transition-[gap] w-full shadow-lg overflow-hidden  rounded-xl text-white">
            <Image
              width={1000}
              height={1400}
              src="/images/limitless_international.webp"
              alt="Limitless International"
              className="absolute left-0 top-0 w-full h-full object-cover -z-[1]"
            />
            <div className="absolute left-0 top-0 w-full h-[300%] object-cover bg-gradient-to-b from-primary -z-[1]" />
            <MaterialSymbol icon="public" fill size={64} />
            <div className="font-bold text-3xl leading-none max-w-xs">
              {t('landing.workAbroad.title')}
            </div>
            <div className="max-w-xs">
              {t('landing.workAbroad.description')}
            </div>
          </div>
        </Link>
        <Link href="./solutions">
          <div className="h-[400px] p-6 flex flex-col relative justify-start gap-4 hover:gap-10 transition-[gap] w-full shadow-lg overflow-hidden  rounded-xl text-white">
            <Image
              width={1000}
              height={1400}
              src="/images/meeting1.webp"
              alt="Meeting"
              className="absolute left-0 top-0 w-full h-full object-cover -z-[1] object-right"
            />
            <div className="absolute left-0 top-0 w-full h-full object-cover bg-white opacity-30 -z-[1]" />
            <div className="absolute left-0 top-0 w-full h-[150%] object-cover bg-gradient-to-b from-primary -z-[1]" />
            <MaterialSymbol icon="monitoring" fill size={64} />
            <div className="font-bold text-3xl leading-none max-w-xs">
              {t('landing.businessConsultancy.title')}
            </div>
            <div className="max-w-xs">
              {t('landing.businessConsultancy.description')}
            </div>
          </div>
        </Link>
      </section>
      <section className="pb-10">
        <div className="flex flex-col gap-16 lg:p-10 pt-12 bg-primary">
          <p
            className="text-3xl lg:text-4xl font-bold text-center"
            dangerouslySetInnerHTML={{
              __html: t('landing.takeCare.mainTitle'),
            }}
          />
          <div className="px-8 lg:p-20 py-12 lg:py-8 lg:pt-2 flex flex-col lg:flex-row gap-20 lg:gap-px items-center justify-center relative h-fit bg-primary ">
            <div className="w-auto flex gap-4 items-center overflow-x-visible moveToRight relative z-[2]">
              <Image
                width={1000}
                height={800}
                className="object-cover rounded-xl bg-slate-200 shadow-2xl zoomIn"
                src="/images/landing_fg10.webp"
                alt="The Limitless team"
              />
            </div>
            <div className="flex flex-col justify-center gap-16 w-full z-[2]  bg-opacity-100  lg:py-14 rounded-2xl text-primary moveToLeft -mt-20 lg:-ml-1 lg:mt-2 relative">
              <div className="flex flex-col justify-center gap-8 w-full z-[2] bg-white p-8 lg:p-12 shadow-2xl rounded-2xl text-primary moveToLeft relative">
                <p
                  className="text-2xl lg:text-2xl font-bold moveToLeft whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{
                    __html: t('landing.takeCare.title'),
                  }}
                />
                <p className="moveToLeft leading-normal">
                  {t('landing.takeCare.description')}
                </p>
                <Link
                  className="px-10 w-fit py-4 font-bold flex items-center gap-2 hover:gap-4 transition-[gap] duration-300 ease-in-out bg-accent text-primary rounded-full moveToLeft"
                  href="./about-us"
                >
                  {t('landing.learnMore')}
                  <MaterialSymbol icon="arrow_right_alt" />
                </Link>
                {/* <div className="rounded-full w-24 h-24 absolute bg-accent -right-4 lg:right-14 bottom-0 lg:-bottom-2 delayScrollNoIndex" /> */}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="px-8 lg:p-36 py-10 lg:py-10 flex flex-col gap-8 items-center justify-center z-[1] relative h-fit text-primary">
        <p
          className="text-3xl lg:text-4xl font-bold text-center"
          dangerouslySetInnerHTML={{
            __html: t('landing.chooseExcellence.title'),
          }}
        />
        <div className="text-lg grid grid-cols-1 md:grid-cols-3">
          {(
            t('landing.chooseExcellence.items') as unknown as {
              title: string;
              description: string;
              icon: string;
            }[]
          ).map(s => (
            <div
              key={s.icon}
              className="flex flex-col items-center gap-4 moveInCards col-span-1 p-4 lg:p-8 rounded-2xl"
            >
              <MaterialSymbol
                size={128}
                icon={s.icon}
                fill
                className="text-accent "
              />
              <p className=" whitespace-pre-wrap text-primary text-center text-2xl font-bold z-[1]">
                {s.title}
              </p>
              <p className="whitespace-pre-wrap text-primary text-center text-base z-[1]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-8 pt-10 bg-primary relative overflow-y-visible flex flex-col gap-10">
        <p
          className="font-bold text-white text-2xl lg:text-4xl px-8 lg:px-36 z-[1] text-center"
          dangerouslySetInnerHTML={{ __html: t('testimonials.title') }}
        />

        <div className="w-full z-[1]">
          <Carousel dotPosition="bottom" autoplay>
            <div className=" relative flex flex-col lg:flex-row w-full gap-2 overflow-hidden p-2 lg:p-10 lg:px-48 pb-8">
              <div className="bg-white rounded-xl p-8 flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-8">
                  <div className=" leading-normal">
                    As a global services leader in the digitization industry, we
                    are grateful for the outstanding support and opportunities
                    that Limitless Solutions has provided us. Their wide network
                    and top-notch services, including due diligence, B2G
                    contacts, and government advocacy in Macedonia, have
                    provided us with invaluable support.
                    <br />
                    <br />
                    Their exceptional commitment and brand awareness skills have
                    positioned us for a smooth entrance into the Balkan market.
                    As a result, they have become our representative for the
                    region. We highly recommend Limitless Solutions to any
                    organization seeking a reliable partner for success in the
                    Balkans.
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      className="object-cover rounded-full aspect-square h-14 w-14"
                      src="/images/testimonials/sanjay.webp"
                      alt="Sanjay"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-1">
                      <div className="font-bold leading-none text-xl">
                        Sanjay Salil
                      </div>
                      <div className="opacity-70 font-bold text-xs">
                        Founder & CEO, MediaGuru
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col lg:flex-row w-full gap-2 overflow-hidden p-2 lg:p-10 lg:px-48 pb-8">
              <div className="bg-white rounded-xl p-8 flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-8">
                  <div className=" leading-normal">
                    Limitless Solutions helped us establish a fully staffed
                    office, including a dynamic call center with
                    Turkish-speaking representatives in Macedonia. With their
                    comprehensive outsourcing solution, we experienced
                    remarkable growth, expanding our team by 25+ professionals
                    in 2 years. By leveraging their expertise, we achieved up to
                    50% cost savings. They are our trusted partner for
                    outsourcing excellence.
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      className="object-cover rounded-full aspect-square h-14 w-14"
                      src="/images/testimonials/sedat.webp"
                      alt="Sedat"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-1">
                      <div className="font-bold leading-none text-xl">
                        Sedat
                      </div>
                      <div className="opacity-70 font-bold text-xs">
                        International Client
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col lg:flex-row w-full gap-2 overflow-hidden p-2 lg:p-10 lg:px-48 pb-8">
              <div className="bg-white rounded-xl p-8 flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-8">
                  <div className=" leading-normal">
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
            </div>
            <div className=" relative flex flex-col lg:flex-row w-full gap-2 overflow-hidden p-2 lg:p-10 lg:px-48 pb-8">
              <div className="bg-white rounded-xl p-8 flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-8">
                  <div className=" leading-normal">
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
            </div>
            <div className=" relative flex flex-col lg:flex-row w-full gap-2 overflow-hidden p-2 lg:p-10 lg:px-48 pb-8">
              <div className="bg-white rounded-xl p-8 flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-8">
                  <div className=" leading-normal">
                    Limitless Solutions was an excellent partner in helping me
                    organize my very first live event in Macedonia! They
                    guaranteed that everything was flawless before and during
                    the event so I could focus on what was important to me -
                    delivering the content. They were also a great resource in
                    marketing the event, which ended up sold out! I highly
                    recommend them for your future projects or events.
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      className="object-cover rounded-full aspect-square h-14 w-14"
                      src="/images/testimonials/dragana.webp"
                      alt="Steve"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-1">
                      <div className="font-bold leading-none text-xl">
                        Dragana Ognenovska
                      </div>
                      <div className="opacity-70 font-bold text-xs">
                        Business Coach & Founder, Dragana Live
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative flex flex-col lg:flex-row w-full gap-2 overflow-hidden p-2 lg:p-10 lg:px-48 pb-8">
              <div className="bg-white rounded-xl p-8 flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-8">
                  <div className=" leading-normal">
                    I’d like to thank the team of Limitless Solutions for the
                    continuous support and employment options they provided me
                    with upon my return from Australia. From the initial contact
                    to the point of signing a contract, their service was far
                    better than superb
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      className="object-cover rounded-full aspect-square h-14 w-14"
                      src="/images/testimonials/matt.webp"
                      alt="Matt"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-1">
                      <div className="font-bold leading-none text-xl">
                        Matt Arsovski
                      </div>
                      <div className="opacity-70 font-bold text-xs">
                        Limitless EOR Team
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <GlobalMapComponent />
      <section className="px-8 lg:px-60 flex justify-center relative">
        <div className="flex flex-col items-center justify-center relative overflow-hidden bg-primary rounded-2xl w-full zoomIn z-0">
          <Image
            className="absolute left-0 top-0 w-full h-full object-cover mix-blend-lighten saturate-0 opacity-20 object-[0, 70%]"
            width={1000}
            height={1000}
            alt="Connect"
            src="/images/handshake.webp"
          />
          <div className="flex flex-col gap-8 max-w-4xl z-[1] p-8 lg:p-16">
            <p
              className="text-center text-2xl lg:text-4xl text-white font-bold m-0"
              dangerouslySetInnerHTML={{
                __html: t('landing.letsBuild.title'),
              }}
            />

            <p className="text-center text-white text-lg ">
              {t('landing.letsBuild.description')}
            </p>
            <div className="flex items-center justify-center ">
              <Link
                className="px-10 py-4 font-bold text-xl flex items-center justify-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out bg-accent text-primary rounded-full"
                href="./contact"
              >
                <MaterialSymbol icon="mail" /> {t('landing.connectWithUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <motion.section className="px-8 lg:px-36 py-24 bg-white flex flex-col justify-center gap-10">
        <motion.p
          variants={loadVariantsVertical}
          className="font-bold text-primary text-3xl lg:text-3xl text-center"
        >
          Clients
        </motion.p>
        <motion.div
          variants={loadVariants}
          initial="hide"
          whileInView="show"
          exit="hide"
          className="flex items-center justify-evenly gap-2 flex-wrap"
        >
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/clients/europa-worldwide.png"
              width={100}
              height={100}
              className="object-contain"
              alt="europa-worldwide"
            />
          </motion.div>
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/clients/fourways-cargo.png"
              width={110}
              height={110}
              className="object-contain"
              alt="fourways-cargo"
            />
          </motion.div>
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/clients/visa-solutions.png"
              width={90}
              height={90}
              className="object-contain"
              alt="visa-solutions"
            />
          </motion.div>
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/clients/visa-solutions-healthcare.png"
              width={90}
              height={90}
              className="object-contain"
              alt="visa-solutions-healthcare"
            />
          </motion.div>
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/clients/agk-logistics.png"
              width={80}
              height={80}
              className="object-contain"
              alt="agk-logistics"
            />
          </motion.div>
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/clients/brightsky.webp"
              width={80}
              height={80}
              className="object-contain"
              alt="brightsky-transport"
            />
          </motion.div>
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/clients/muftar-transport.png"
              width={90}
              height={90}
              className="object-contain"
              alt="muftar-transport"
            />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section
        variants={loadVariants}
        initial="hide"
        whileInView="show"
        exit="hide"
        className="px-8 lg:px-36 pb-24 bg-white flex flex-col justify-center gap-10"
      >
        <motion.p
          variants={loadVariantsVertical}
          className="font-bold text-primary text-3xl lg:text-3xl text-center"
        >
          Collaborators
        </motion.p>
        <motion.div
          variants={loadVariants}
          initial="hide"
          whileInView="show"
          exit="hide"
          className="flex items-center justify-evenly gap-px flex-wrap"
        >
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/collaborators/eys.png"
              width={65}
              height={65}
              className="object-contain"
              alt="eys"
            />
          </motion.div>
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/collaborators/mediaguru.png"
              width={110}
              height={110}
              className="object-contain"
              alt="mediaguru"
            />
          </motion.div>
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/collaborators/tosicjevtic.jpeg"
              width={80}
              height={80}
              className="object-contain"
              alt="tosic&jevtic"
            />
          </motion.div>
          <motion.div variants={loadVariantsVertical}>
            <Image
              src="/images/collaborators/ading.png"
              width={110}
              height={110}
              className="object-contain"
              alt="ading"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Page;
