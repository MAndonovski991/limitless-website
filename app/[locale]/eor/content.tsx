'use client';

import { useEffect } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import lax from 'lax.js';

import { MaterialSymbol } from 'react-material-symbols';

import { useTranslation } from '../../../utils/translationProvider';
import Marquee from 'react-fast-marquee';
import LetsTalkSection from '../../../components/letsTalkSection';
import ScrollToTop from '../../../components/scrollToTop';

const COLORS = [
  'bg-blue-500',
  'bg-[#114481]',
  'bg-[#225a96]',
  'bg-[#3270ab]',
  'bg-[#3270ab]',
  'bg-[#4386bf]',
  'bg-[#549cd4]',
  'bg-accent',
];

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
  }, []);

  return (
    <div className=" min-h-screen">
      <ScrollToTop />
      <div className="max-lg:min-h-fit h-[70svh] lg:h-[70svh] bg-primary relative w-full flex flex-col md:flex-row justify-start lg:justify-start overflow-hidden px-4 lg:px-28 pt-[9%] pb-20 lg:pb-36 gap-4 rounded-b-3xl">
        <video
          className="absolute left-0 top-0 w-full h-full object-cover mix-blend-soft-light opacity-30"
          width={1000}
          height={1000}
          src="/videos/employees.mp4"
          autoPlay
          controls={false}
          loop
          muted
        />
        <div className="flex flex-col gap-8 absolute bottom-1/2 translate-y-[80%]">
          <h1
            className=" text-3xl lg:text-5xl text-white font-bold leading-tight text-left w-[90%] lg:w-[65%] z-[2]"
            dangerouslySetInnerHTML={{ __html: t('pages.eor.title') }}
          />
        </div>
      </div>
      <section className="bg-white text-primary text-center flex flex-col items-center gap-10 pt-20 px-2 lg:px-12 h-fit pb-20">
        <h1
          className="text-2xl lg:text-3xl font-bold"
          dangerouslySetInnerHTML={{
            __html: t('pages.eor.recruitment'),
          }}
        />
        <p
          className="text-lg lg:text-xl z-[2]"
          dangerouslySetInnerHTML={{ __html: t('pages.eor.description') }}
        />
        <div className="w-full grid grid-cols-4 items-start justify-center h-fit gap-2 text-start">
          {(
            t('pages.eor.services') as unknown as {
              title: string;
              icon: string;
              description: string[];
            }[]
          ).map((s, i) => (
            <div className="h-fit lg:h-36  overflow-visible col-span-4 lg:col-span-1 z-[1]">
              <div
                className={`p-4 max-h-36 text-white active:max-h-[450px] hover:max-h-[450px] transition-all duration-500 ease-in-out overflow-hidden ${COLORS[i]} flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl`}
              >
                <div className="flex flex-col items-start gap-4 text-2xl font-bold">
                  <MaterialSymbol icon={s.icon} size={24} fill />
                  <p>{s.title}</p>
                  <p className="text-sm opacity-50">See More {'->'}</p>
                </div>
                <div className="flex flex-col items-start gap-2 opacity-70 text-sm">
                  {s.description.map(item => (
                    <p>
                      <MaterialSymbol icon="check_circle" fill /> {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="eor" className="w-full h-fit">
        <section className="bg-slate-100 text-primary flex flex-col gap-10 py-10 text-center">
          <p className="text-2xl font-bold pb-8 lg:px-36">
            EOR Roadmap <span className="text-accent">To Success</span>
          </p>

          <div className="w-full overflow-x-hidden no-scrollbar snap-mandatory snap-x">
            <Marquee pauseOnHover speed={50}>
              <div className="flex flex-row items-center w-fit px-36">
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="lift_to_talk" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">01</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Initial Consultation
                  </div>
                  <p className="text-sm">
                    We discuss with you to better understand your specific
                    staffing needs and requirements and any specific compliance
                    or legal considerations.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">01</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="groups_3" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">02</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Candidate Sourcing
                  </div>
                  <p className="text-sm">
                    Our team utilizes our extensive network and resources to
                    source qualified candidates for your positions.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">02</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="download" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">03</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Candidate onboarding
                  </div>
                  <p className="text-sm">
                    Once suitable candidates are identified, we handle the
                    entire onboarding process. This includes facilitating
                    employment contracts, managing paperwork, collecting
                    necessary documentation, and ensuring compliance with local
                    labor laws and regulations.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">03</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="signature" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">04</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Employment & Payroll Administration
                  </div>
                  <p className="text-sm">
                    As the Employer of Record, we take care of all
                    employment-related matters.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">04</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="account_circle" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">05</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    HR support
                  </div>
                  <p className="text-sm">
                    We provide ongoing HR support to the employees working which
                    includes handling employee queries, managing leave and
                    time-off requests, and addressing any employment-related
                    issues that may arise.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">05</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="policy" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">06</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Legal and Compliance
                  </div>
                  <p className="text-sm">
                    We ensure adherence to local labor laws, regulations, and
                    employment standards, mitigating any potential risks
                    associated with employment-related matters.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">06</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="monitoring" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">07</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Performance Management
                  </div>
                  <p className="text-sm">
                    We work with you to establish performance management systems
                    and metrics tailored to your business needs.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">07</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="upload" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">08</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Offboarding
                  </div>
                  <p className="text-sm">
                    If necessary, we handle the termination or offboarding
                    process for employees, ensuring compliance with local laws
                    and regulations.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">08</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="lab_profile" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">09</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Reporting and Transparency
                  </div>
                  <p className="text-sm">
                    You receive comprehensive updates on payroll, employment
                    status, and any other relevant information, giving you a
                    clear overview of the workforce under our EOR service.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">09</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white ">
                  {/* <MaterialSymbol icon="forum" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">10</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Ongoing Communication and Support
                  </div>
                  <p className="text-sm">
                    Our dedicated team is readily available to provide support
                    and guidance as needed, ensuring a positive and value-based
                    experience.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">10</div> */}
                </div>
              </div>
            </Marquee>
          </div>
        </section>
        <section className="lg:px-36 py-10">
          <p className="font-bold text-primary text-2xl lg:text-4xl px-8 lg:px-36 z-[1] text-center">
            Testimonial
          </p>
          <div className=" relative flex flex-col lg:flex-row w-full h-fit overflow-hidden p-2 lg:p-4 lg:px-48">
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
            <div className=" rounded-xl p-8 flex flex-col lg:flex-row gap-4 z-[1]">
              <div className="flex flex-col gap-8">
                <div className=" leading-normal lg:text-xl tracking-wide bg-slate-100 p-8 rounded-2xl">
                  I’d like to thank the team of Limitless Solutions for the
                  continuous support and employment options they provided me
                  with upon my return from Australia. From the initial contact
                  to the point of signing a contract, their service was far
                  better than superb!
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
        </section>
        {params && <LetsTalkSection locale={params.locale as string} />}
      </section>
    </div>
  );
};

export default Content;
