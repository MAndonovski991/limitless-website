'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import lax from 'lax.js';

import { MaterialSymbol } from 'react-material-symbols';

import { useEffect } from 'react';
import { useTranslation } from '../../../utils/translationProvider';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
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
              768: ['0', '30'],
              769: ['0', 'index*10+40'],
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
            ['elInY+index*20', 'elInY+index*40+200'],
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

  return (
    <div className=" min-h-screen">
      <ScrollToTop />
      <ScrollToTop />
      <div className="max-lg:min-h-fit h-[70svh] lg:h-[70svh] bg-primary relative w-full flex flex-col md:flex-row justify-start lg:justify-start overflow-hidden px-4 lg:px-28 gap-4 rounded-b-3xl">
        <Image
          unoptimized
          className="absolute left-0 object-[0, 45%] top-0 w-full h-full object-cover opacity-40 mix-blend-soft-light zoomIn"
          width={1000}
          height={1000}
          alt="Teamwork"
          src="/images/team-hands.webp"
        />
        <div className="flex flex-col gap-8 w-full max-w-full absolute bottom-1/2 translate-y-[80%] ">
          <h1
            className=" text-2xl lg:text-4xl text-white font-bold leading-tight text-left w-[80%] lg:w-[70%] z-[2]"
            dangerouslySetInnerHTML={{ __html: t('pages.aboutUs.description') }}
          />
        </div>
      </div>
      <section className="bg-slate-100 w-full px-8 lg:px-56 z-[3] ">
        <div className="flex flex-col gap-4 lg:flex-row items-start overflow-visible rounded-xl relative h-fit py-10 lg:py-0 lg:h-96">
          <div className="h-full w-1/2 relative" />
          <Image
            className="hidden lg:block h-fit object-contain absolute bottom-0 left-10 "
            alt="aleksandra"
            src="/images/aleksandra.webp"
            unoptimized
            width={300}
            height={1000}
          />
          <Image
            className="block lg:hidden h-20 w-20 rounded-full object-cover moveToRight"
            alt="aleksandra"
            src="/images/aleksandra2.webp"
            width={500}
            height={500}
          />
          <div className=" lg:w-1/2 lg:h-full flex flex-col justify-center gap-8 relative">
            <p className="text-primary text-lg lg:text-xl moveToLeft text-justify relative">
              <MaterialSymbol
                icon="format_quote"
                fill
                size={128}
                className=" absolute -left-32 -top-20 text-primary z-[2] rotate-180 hidden md:block opacity-10"
              />

              {t('pages.aboutUs.messageCeo.description')}
              <MaterialSymbol
                icon="format_quote"
                fill
                size={128}
                className="absolute right-20 -bottom-10 text-primary z-[2] h-0 overflow-visible leading-[0] translate-y-1 hidden md:block opacity-10"
              />
            </p>
            <p className="text-primary text-xl font-bold moveToLeft">
              {t('pages.aboutUs.messageCeo.title')}
            </p>
          </div>
        </div>
      </section>
      <section className=" text-primary overflow-hidden flex flex-col-reverse lg:flex-row z-[4] min-h-fit lg:p-10">
        <div className="w-full lg:w-1/2 p-8 py-10 lg:p-20 flex flex-col gap-8 h-full justify-center z-[2]">
          <p
            className="text-2xl lg:text-3xl font-bold moveToRight"
            dangerouslySetInnerHTML={{
              __html: t('pages.aboutUs.ourStory.title'),
            }}
          />
          <p className="whitespace-pre-wrap moveToRight text-justify">
            {(
              t('pages.aboutUs.ourStory.description') as unknown as string[]
            ).join('\n\n')}
          </p>
        </div>
        <div className="w-full pt-10 lg:pt-0 lg:py-0 lg:w-[60%] relative z-0">
          <div className=" h-fit lg:absolute  lg:translate-x-0 lg:-right-20 lg:top-1/2 lg:-translate-y-1/2 px-10 lg:px-8 grid-flow-dense grid grid-cols-12 max-lg:grid-flow-dense lg:w-[110%] gap-4 lg:gap-6 z-[3] justify-start items-start">
            <Image
              className="col-span-5 lg:col-span-3 object-cover overflow-hidden z-[3] rounded-2xl moveToLeft self-end"
              src="/images/collage-6-1.webp"
              alt="limitless-int"
              width={400}
              height={400}
            />
            <Image
              className=" col-span-7 lg:col-span-5 object-cover overflow-hidden z-[3] rounded-2xl moveToLeft self-end"
              src="/images/collage-1-1.webp"
              alt="limitless-int"
              width={1000}
              height={1000}
            />
            <Image
              className="col-span-7 lg:col-span-4 object-cover overflow-hidden z-[3] rounded-2xl moveToLeft self-end"
              src="/images/collage-7.webp"
              alt="limitless-int"
              width={1000}
              height={1000}
            />
            <Image
              className="col-span-5 lg:col-span-3 lg:col-start-2 object-cover overflow-hidden z-[3] rounded-2xl moveToLeft"
              src="/images/collage-4.webp"
              alt="limitless-int"
              width={1000}
              height={1000}
            />
            <Image
              className="col-span-5 lg:col-span-4 object-cover overflow-hidden z-[3] rounded-2xl moveToLeft"
              src="/images/collage-5.webp"
              alt="limitless-int"
              width={1000}
              height={1000}
            />
            <Image
              className="col-span-7 lg:col-span-3 object-cover overflow-hidden z-[3] rounded-2xl moveToLeft"
              src="/images/collage-2.webp"
              alt="limitless-int"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
      <section className="bg-primary z-0 w-full py-10 flex flex-col gap-4">
        <p
          className="p-8 lg:px-36 text-center text-2xl lg:text-3xl text-white font-bold"
          dangerouslySetInnerHTML={{
            __html: t('pages.aboutUs.coreValues.title'),
          }}
        />

        <div className="grid grid-cols-2 lg:grid-cols-12 w-full items-center justify-center px-2 lg:px-8 gap-4">
          <div className=" bg-blue-900 text-white col-span-2 rounded-2xl lg:aspect-square flex flex-col p-10 items-center justify-center gap-4 text-center moveInCards shadow-xl">
            <MaterialSymbol size={56} icon="handshake" />
            <p className="text-2xl font-bold">
              {t('pages.aboutUs.coreValues.integrity')}
            </p>
          </div>
          <div className=" bg-blue-800 text-white col-span-2 rounded-2xl lg:aspect-square  flex flex-col p-10 items-center justify-center gap-4  text-center moveInCards shadow-xl">
            <MaterialSymbol size={56} icon="sentiment_very_satisfied" />
            <p className="text-2xl font-bold">
              {t('pages.aboutUs.coreValues.customerSuccess')}
            </p>
          </div>
          <div className=" bg-blue-700 text-white col-span-2 rounded-2xl lg:aspect-square  flex flex-col p-10 items-center justify-center gap-4 text-center moveInCards shadow-xl">
            <MaterialSymbol size={56} icon="groups" />
            <p className="text-2xl font-bold">
              {t('pages.aboutUs.coreValues.excellence')}
            </p>
          </div>
          <div className=" bg-blue-600 text-white col-span-2 rounded-2xl lg:aspect-square flex flex-col p-10 items-center justify-center  gap-4 text-center moveInCards shadow-xl">
            <MaterialSymbol size={56} icon="star" />
            <p className="text-2xl font-bold">
              {t('pages.aboutUs.coreValues.accountability')}
            </p>
          </div>
          <div className=" bg-blue-400 text-white col-span-2 rounded-2xl lg:aspect-square flex flex-col p-10 items-center justify-center gap-4text-center moveInCards shadow-xl">
            <MaterialSymbol size={56} icon="group" />
            <p className="text-2xl font-bold">
              {t('pages.aboutUs.coreValues.trustworthiness')}
            </p>
          </div>
          <div className=" bg-blue-300 text-white col-span-2 rounded-2xl lg:aspect-square flex flex-col p-10 items-center justify-center gap-4 text-center moveInCards shadow-xl">
            <MaterialSymbol size={56} icon="diversity_3" />
            <p className="text-2xl font-bold">
              {t('pages.aboutUs.coreValues.socialResponsibility')}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white lg:p-36 p-8 pb-20 lg:pt-20 text-primary flex flex-col gap-20">
        <p className="text-3xl lg:text-4xl font-bold">
          {t('pages.aboutUs.executiveTeam.title')}
        </p>
        <div className="h-fit flex flex-col lg:flex-row w-full gap-20 lg:gap-8">
          <div className="lg:flex-1 h-fit relative moveInCards flex flex-col gap-2">
            <div className=" relative h-72 bg-slate-100 rounded-3xl">
              <Image
                className="absolute bottom-0 object-contain h-[120%] w-[130%] max-h-[130%]"
                src="/images/aleksandra.webp"
                height={1000}
                width={500}
                unoptimized
                alt="aleksandra"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className=" text-primary font-bold text-lg">
                Aleksandra Murgoska
              </p>
              <p className=" text-primary">
                {t('pages.aboutUs.executiveTeam.ceo')}
              </p>
              <a
                href="https://www.linkedin.com/in/aleksandra-murgoska-10623511/"
                target="_blank"
                className="p-2 mt-2 rounded-full bg-primary text-white flex items-center justify-center gap-2"
                rel="noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:flex-1 h-fit relative moveInCards flex flex-col gap-2">
            <div className=" relative h-72 bg-slate-100 rounded-3xl">
              <Image
                className="absolute bottom-0 object-contain h-[120%] w-[130%] max-h-[130%]"
                src="/images/milka.webp"
                height={1000}
                width={500}
                unoptimized
                alt="milka"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className=" text-primary font-bold text-lg">Milka Arsova</p>
              <p className=" text-primary">
                {t('pages.aboutUs.executiveTeam.headOfProjects')}
              </p>
              <a
                href="https://www.linkedin.com/in/milka-arsova-967672a2/"
                target="_blank"
                className="p-2 mt-2 rounded-full bg-primary text-white flex items-center justify-center gap-2"
                rel="noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:flex-1 h-fit relative moveInCards flex flex-col gap-2">
            <div className=" relative h-72 bg-slate-100 rounded-3xl">
              <Image
                className="absolute bottom-0 object-contain h-[120%] w-[130%] max-h-[130%]"
                src="/images/ana.webp"
                height={1000}
                width={500}
                unoptimized
                alt="ana"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className=" text-primary font-bold text-lg">Ana Stojkova</p>
              <p className=" text-primary">Strategy Consultant</p>
              <a
                href="https://www.linkedin.com/in/ana-stojkova-24a2574/"
                target="_blank"
                className="p-2 mt-2 rounded-full bg-primary text-white flex items-center justify-center gap-2"
                rel="noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="text-3xl lg:text-4xl font-bold">Non-Executive Team</p>
        <div className="h-fit flex flex-col lg:flex-row w-full gap-20 lg:gap-8">
          <div className="lg:flex-1 h-fit relative moveInCards flex flex-col gap-2">
            <div className=" relative h-72 bg-slate-100 rounded-3xl">
              <Image
                className="absolute bottom-0 object-contain h-[120%] w-[130%] max-h-[130%]"
                src="/images/hristijan.webp"
                height={1000}
                width={500}
                unoptimized
                alt="hristijan"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className=" text-primary font-bold text-lg">
                Hristijan Risteski
              </p>
              <p className=" text-primary whitespace-pre-wrap">{`Business Development Consultant\nSouthwest Region, USA`}</p>
              <a
                href="https://www.linkedin.com/in/hristijanristeski"
                target="_blank"
                className="p-2 mt-2 rounded-full bg-primary text-white flex items-center justify-center gap-2"
                rel="noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:flex-1 h-fit relative moveInCards flex flex-col gap-2">
            <div className=" relative h-72 bg-slate-100 rounded-3xl">
              <Image
                className="absolute bottom-0 object-contain h-[120%] w-[130%] max-h-[130%]"
                src="/images/miloseska.webp"
                height={1000}
                width={500}
                unoptimized
                alt="aleksandra"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className=" text-primary font-bold text-lg">
                Aleksandra Miloseska
              </p>
              <p className=" text-primary whitespace-pre-wrap">{`Business Development & Marketing Advisor\nNortheast Region, USA`}</p>
              <a
                href="https://www.linkedin.com/in/aleksandra-miloseska-95ab0530/"
                target="_blank"
                className="p-2 mt-2 rounded-full bg-primary text-white flex items-center justify-center gap-2"
                rel="noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:flex-1 h-fit relative moveInCards flex flex-col gap-2">
            <div className=" relative h-72 bg-slate-100 rounded-3xl">
              <Image
                className="absolute bottom-0 object-contain h-[120%] w-[130%] max-h-[130%]"
                src="/images/jay.webp"
                height={1000}
                width={500}
                unoptimized
                alt="jay"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className=" text-primary font-bold text-lg">Jay Fulgencio</p>
              <p className=" text-primary whitespace-pre-wrap">{`Business Development Consultant\nMidwest Region, USA`}</p>
              <a
                href="https://www.linkedin.com/in/drjreal01/"
                target="_blank"
                className="p-2 mt-2 rounded-full bg-primary text-white flex items-center justify-center gap-2"
                rel="noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className=" p-2 pt-0 lg:px-24 pb-20 overflow-hidden">
        <div className="p-8 pb-80 lg:pb-16 lg:p-16 relative overflow-hidden bg-primary text-white rounded-3xl flex flex-col gap-8 -z-[1] ">
          <Image
            alt="macedonia-map"
            src="/images/macedonia.webp"
            className="object-cover absolute max-w-none -bottom-40 w-[140%] lg:h-fit left-1/2 -translate-x-1/2 lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[70%] opacity-70 mix-blend-hard-light -z-[1]"
            width={1300}
            height={1300}
            unoptimized
          />
          <p
            className="text-3xl font-bold moveToRight"
            dangerouslySetInnerHTML={{ __html: t('pages.aboutUs.ourHq.title') }}
          />
          <p className="whitespace-pre-wrap lg:max-w-xl moveToRight">
            {(t('pages.aboutUs.ourHq.description') as unknown as string[]).join(
              '\n\n'
            )}
          </p>
          <div className="flex flex-col gap-4">
            {(t('pages.aboutUs.ourHq.advantages') as unknown as string[]).map(
              adv => (
                <div key={adv} className="flex items-center gap-2 moveToRight">
                  <MaterialSymbol
                    fill
                    icon="check_circle"
                    className="text-accent"
                  />
                  <p>{adv}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-12 items-center p-2 pb-20 pt-12 lg:pt-12 lg:px-24 overflow-hidden bg-slate-100">
        <p className="text-2xl lg:text-3xl font-bold lg:px-36 text-primary">
          Media Presence & Awards
        </p>
        <Marquee pauseOnHover speed={130} className="w-full">
          <div className="flex gap-10 w-full px-8">
            <Image
              width={300}
              height={400}
              src="/images/certificate.webp"
              alt="certificate"
              className="object-cover rounded-2xl"
            />
            <Image
              width={300}
              height={400}
              src="/images/certificate2.webp"
              alt="certificate2"
              className="object-cover rounded-2xl"
            />
            <Image
              width={600}
              height={200}
              src="/images/letter-gratitude.webp"
              alt="Letter of Gratitude for Limitless Solutions"
              className="object-cover rounded-2xl"
            />
            <Link href="https://weplatform.mk/wp-content/uploads/2023/04/Final30soveti.pdf">
              <div className="h-[400px] p-6 flex flex-col relative justify-end gap-4 hover:gap-10 transition-[gap] w-[360px] shadow-lg overflow-hidden  rounded-xl  text-white">
                <div className="font-bold text-3xl leading-none max-w-xs">
                  Advice From 30 Women Entrepreneurs
                </div>
                <div className="max-w-xs text-justify">Read More</div>
                <Image
                  width={1100}
                  height={1400}
                  src="/images/mediacoverage/women-entrepreneurs.webp"
                  alt="Article Background"
                  className="absolute left-0 bottom-0 w-full h-full object-cover -z-[1]"
                />
                <div className="absolute left-0 bottom-0 w-full h-[150%] object-cover bg-gradient-to-t from-primary -z-[1]" />
              </div>
            </Link>
            <Link href="https://polsci.okstate.edu/friends/alumni-spotlight/512-murgoska-visit">
              <div className="h-[400px] p-6 flex flex-col relative justify-end gap-4 hover:gap-10 transition-[gap] w-[360px] shadow-lg overflow-hidden  rounded-xl  text-white">
                <div className="font-bold text-3xl leading-none max-w-xs">
                  Alumni Spotlight: From Stillwater to Macedonia & Back
                </div>
                <div className="max-w-xs text-justify">Read More</div>
                <Image
                  width={1100}
                  height={1400}
                  src="/images/mediacoverage/alumni-spotlight.webp"
                  alt="Article Background"
                  className="absolute left-0 bottom-0 w-full h-full object-cover -z-[1]"
                />
                <div className="absolute left-0 bottom-0 w-full h-[150%] object-cover bg-gradient-to-t from-primary -z-[1]" />
              </div>
            </Link>
            <Link href="https://weradio.mk/index.php/2022/03/07/epizoda-37-aleksandra-murgoska/">
              <div className="h-[400px] p-6 flex flex-col relative justify-end gap-4 hover:gap-10 transition-[gap] w-[360px] shadow-lg overflow-hidden  rounded-xl  text-white">
                <div className="font-bold text-3xl leading-none max-w-xs">
                  The Voice of Women Entrepreneurs: Episode 37
                </div>
                <div className="max-w-xs text-justify">Read More</div>
                <Image
                  width={1100}
                  height={1400}
                  src="/images/mediacoverage/weradio.webp"
                  alt="Article Background"
                  className="absolute left-0 bottom-0 w-full h-full object-cover -z-[1]"
                />
                <div className="absolute left-0 bottom-0 w-full h-[150%] object-cover bg-gradient-to-t from-primary -z-[1]" />
              </div>
            </Link>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Content;
