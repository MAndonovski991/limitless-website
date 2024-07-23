'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { MaterialSymbol } from 'react-material-symbols';

import lax from 'lax.js';
import Marquee from 'react-fast-marquee';

import { useTranslation } from '../../../utils/translationProvider';
import LetsTalkSection from '../../../components/letsTalkSection';
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
          className="absolute left-0 top-0 w-full h-full object-cover mix-blend-soft-light opacity-30"
          width={1000}
          height={1000}
          src="/videos/buildings.mp4"
          autoPlay
          controls={false}
          loop
          muted
        />
        <div className="flex flex-col gap-8 absolute bottom-1/2 translate-y-[80%]">
          <h1
            className=" text-3xl lg:text-5xl text-white font-bold leading-tight text-left w-[90%] lg:w-[60%] z-[2]"
            dangerouslySetInnerHTML={{ __html: t('pages.bpo.title') }}
          />
        </div>
      </div>
      <section className="bg-white text-primary flex  text-center flex-col justify-center items-center gap-10 pt-20 px-2 lg:px-12 h-fit pb-20">
        <h1
          className="text-2xl lg:text-3xl font-bold"
          dangerouslySetInnerHTML={{
            __html: t('pages.bpo.multiSolTitle'),
          }}
        />
        <p
          className="text-lg lg:text-xl z-[2]"
          dangerouslySetInnerHTML={{ __html: t('pages.bpo.description') }}
        />
        <div className="w-full grid grid-cols-4 items-start justify-center h-fit gap-2 text-start">
          <div className="h-fit lg:h-36 overflow-visible col-span-4 lg:col-span-1 z-[5]">
            <div className="p-4 max-h-36 active:max-h-[450px] hover:max-h-[450px] transition-all duration-500 ease-in-out overflow-hidden text-white bg-blue-500 flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl">
              <div className="flex flex-col items-start gap-4 text-2xl font-bold">
                <MaterialSymbol icon="payments" size={24} fill />
                <p>Finance & Accounting</p>
                <p className="text-sm opacity-50">See More {'->'}</p>
              </div>
              <div className="flex flex-col items-start justify-start text-start gap-2 opacity-70 text-sm">
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Accounts
                  Receivable/Accounts Payable Management
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Invoicing
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Record Bookkeeping
                  Management
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Bank
                  reconciliation
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Cash management
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Payroll
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Expenses approval
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Management
                  Reporting
                </p>
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-36 overflow-visible col-span-4 lg:col-span-1 z-[5]">
            <div className="p-4 max-h-36 active:max-h-[450px] hover:max-h-[450px] transition-all duration-500 ease-in-out overflow-hidden text-white bg-[#114481] flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl">
              <div className="flex flex-col items-start gap-4 text-2xl font-bold">
                <MaterialSymbol icon="local_shipping" size={24} fill />
                <p>Logistics</p>
                <p className="text-sm opacity-50">See More {'->'}</p>
              </div>
              <div className="flex flex-col items-start gap-2 opacity-70 text-sm">
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Transportation &
                  shipment management
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Tracking &
                  Afterhours
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Freight Forwarding
                  & Brokerage
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Accounting
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Payroll Management
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Safety &
                  Maintenance
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Driver Recruitment
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Customer Care
                  Support
                </p>
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-36 overflow-visible col-span-4 lg:col-span-1 z-[5]">
            <div className="p-4 max-h-36 active:max-h-[450px] hover:max-h-[450px] transition-all duration-500 ease-in-out overflow-hidden text-white bg-[#225a96] flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl">
              <div className="flex flex-col items-start gap-4 text-2xl font-bold">
                <MaterialSymbol icon="person" size={24} fill />
                <p>Admin, HR & Legal</p>
                <p className="text-sm opacity-50">See More {'->'}</p>
              </div>
              <div className="flex flex-col items-start gap-2 opacity-70 text-sm">
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Data entry & data
                  processing
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Desktop research
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Transcription &
                  Translation
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Virtual Assistance
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Full cycle
                  recruitment
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> HR assistance &
                  management
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Legal assistance
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Legal case workers
                </p>
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-36 overflow-visible col-span-4 lg:col-span-1 z-[4]">
            <div className="p-4 max-h-36 active:max-h-[450px] hover:max-h-[450px] transition-all duration-500 ease-in-out overflow-hidden text-white bg-[#3270ab] flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl">
              <div className="flex flex-col items-start gap-4 text-2xl font-bold">
                <MaterialSymbol icon="insights" size={24} fill />
                <p>Sales & Marketing</p>
                <p className="text-sm opacity-50">See More {'->'}</p>
              </div>
              <div className="flex flex-col items-start gap-2 opacity-70 text-sm">
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Market research &
                  Surveys
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Lead generation
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> CRM data
                  management
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Digital & Social
                  Media Marketing
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Event organization
                  & Management
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> SEO / SEM
                </p>
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-36 overflow-visible col-span-4 lg:col-span-1 z-[3]">
            <div className="p-4 max-h-36 active:max-h-[450px] hover:max-h-[450px] transition-all duration-500 ease-in-out overflow-hidden text-white bg-[#3270ab] flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl">
              <div className="flex flex-col items-start gap-4 text-2xl font-bold">
                <MaterialSymbol icon="psychiatry" size={24} fill />
                <p>Healthcare</p>
                <p className="text-sm opacity-50">See More {'->'}</p>
              </div>
              <div className="flex flex-col items-start gap-2 opacity-70 text-sm">
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Billing & Payments
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Insurance
                  Processing
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Medical
                  Transcribing
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Medical Coding
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Records Management
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Patient
                  Information Management Collections
                </p>
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-36 overflow-visible col-span-4 lg:col-span-1 z-[2]">
            <div className="p-4 max-h-36 active:max-h-[450px] hover:max-h-[450px] transition-all duration-500 ease-in-out overflow-hidden text-white bg-[#4386bf] flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl">
              <div className="flex flex-col items-start gap-4 text-2xl font-bold">
                <MaterialSymbol icon="health_and_safety" size={24} fill />
                <p>Insurance</p>
                <p className="text-sm opacity-50">See More {'->'}</p>
              </div>
              <div className="flex flex-col items-start gap-2 opacity-70 text-sm">
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Insurance Policy
                  Checking
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Endorsements
                  Checking
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Submissions
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Proposal Quotes
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Claim Adjustments
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Lost Summary
                  Reports
                </p>
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-36 lg:col-start-3 overflow-visible col-span-4 lg:col-span-1 z-[1]">
            <div className="p-4 max-h-36 active:max-h-[450px] hover:max-h-[450px] transition-all duration-500 ease-in-out overflow-hidden text-white bg-[#549cd4] flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl">
              <div className="flex flex-col items-start gap-4 text-2xl font-bold">
                <MaterialSymbol icon="draw" size={24} fill />
                <p>Design</p>
                <p className="text-sm opacity-50">See More {'->'}</p>
              </div>
              <div className="flex flex-col items-start gap-2 opacity-70 text-sm">
                <p>
                  <MaterialSymbol icon="check_circle" fill /> UI/UX Design
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Graphic Design
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Architectural
                  Design
                </p>
                <p>
                  <MaterialSymbol icon="check_circle" fill /> Motion Design
                </p>
              </div>
            </div>
          </div>
          <div className="h-fit lg:h-36  overflow-visible col-span-4 lg:col-span-1 z-[1]">
            <div className="p-4 max-h-36 active:max-h-[450px] hover:max-h-[450px] transition-all duration-500 ease-in-out overflow-hidden text-primary bg-accent flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl">
              <div className="flex flex-col items-start gap-4 text-2xl font-bold">
                <MaterialSymbol icon="auto_awesome" size={24} fill />
                <p>Customized Services</p>
                <p className="text-sm opacity-50">See More {'->'}</p>
              </div>
              <div className="flex flex-col items-start gap-2 opacity-70 text-sm">
                <p>
                  <MaterialSymbol icon="check_circle" fill /> We provide
                  tailored outsourcing services designed to meet specific
                  business needs{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-fit">
        <section className="bg-slate-100 text-primary flex flex-col items-center gap-10 py-10">
          <p className="text-2xl font-bold pb-8 lg:px-36">
            BPO Roadmap <span className="text-accent">To Success</span>
          </p>
          <div className="w-full overflow-x-scroll no-scrollbar snap-mandatory snap-x">
            <Marquee pauseOnHover speed={50}>
              <div className="flex flex-row items-center w-fit px-36">
                <div
                  id="bpo_step1"
                  className="self-center p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white"
                >
                  {/* <MaterialSymbol icon="description" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">01</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Understanding your business needs
                  </div>
                  <p className="text-sm">
                    Our expert team thrives to thoroughly understand your
                    business requirements, objectives, and the specific
                    processes you wish to outsource. This helps us tailor our
                    services to meet your unique needs.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">01</div> */}
                </div>
                <div className="self-center w-24 p-1 bg-accent" />
                <div
                  id="bpo_step2"
                  className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white "
                >
                  {/* <MaterialSymbol icon="query_stats" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">02</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Solution Design
                  </div>
                  <p className="text-sm">
                    We work closely with you to design a customized solution. We
                    analyze your processes, determine the scope of work, and
                    define KPIs and service level agreements (SLAs) to ensure we
                    meet your expectations.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">02</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div
                  id="bpo_step3"
                  className="p-8 text-left h-80 rounded-2xl flex flex-col items-start justify-start snap-center w-72 gap-4 bg-blue-500  text-white "
                >
                  {/* <MaterialSymbol icon="conversion_path" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">03</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Transition Planning
                  </div>
                  <p className="text-sm">
                    We develop a comprehensive transition plan to smoothly
                    transfer the identified processes from your organization,
                    including documenting existing procedures, training our
                    team, and establishing secure data transfer protocols.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">03</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div
                  id="bpo_step4"
                  className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white "
                >
                  {/* <MaterialSymbol icon="move_down" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">04</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Knowledge Transfer
                  </div>
                  <p className="text-sm">
                    Our team actively engages in knowledge transfer sessions,
                    with your subject matter experts, study process
                    documentation, and gain a deep understanding of your
                    business procedures.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">04</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div
                  id="bpo_step5"
                  className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white "
                >
                  {/* <MaterialSymbol icon="monitor_heart" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">05</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Process Execution
                  </div>
                  <p className="text-sm">
                    We adhere to the defined SLAs and leverage our specialized
                    skills, technology, and infrastructure to deliver efficient
                    and high-quality results.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">05</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div
                  id="bpo_step6"
                  className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white "
                >
                  {/* <MaterialSymbol icon="monitoring" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">06</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Performance Monitoring
                  </div>
                  <p className="text-sm">
                    We closely monitor the performance of our team using
                    predefined KPIs.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">06</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div
                  id="bpo_step7"
                  className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white "
                >
                  {/* <MaterialSymbol icon="device_hub" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">07</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Continuous Improvement
                  </div>
                  <p className="text-sm">
                    We maintain open lines of communication to keep you informed
                    about the progress, address any concerns, and promptly
                    resolve issues that may arise.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">07</div> */}
                </div>
                <div className="w-24 p-1 bg-accent" />
                <div
                  id="bpo_step8"
                  className="p-8 text-left h-80 rounded-2xl flex flex-col items-start snap-center w-72 gap-4 justify-start bg-blue-500  text-white "
                >
                  {/* <MaterialSymbol icon="admin_panel_settings" size={36} /> */}
                  <div className="text-3xl font-bold mr-auto">08</div>
                  <div className="font-bold text-left text-xl capitalize leading-tight">
                    Data Security and Compliance
                  </div>
                  <p className="text-sm">
                    We employ data security measures and adhere to industry
                    standards and regulatory requirements to ensure the
                    confidentiality, integrity, and availability of your
                    information.
                  </p>
                  {/* <div className="text-3xl font-bold ml-auto">08</div> */}
                </div>
              </div>
            </Marquee>
          </div>
          {/* <Button
            type="primary"
            size="large"
            shape="circle"
            className="self-end mr-16 flex items-center justify-center py-2"
            onClick={handleRoadmapScroll}
          >
            <MaterialSymbol icon="arrow_right_alt" size={35} />
          </Button> */}
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
                <div className=" leading-normal lg:text-xl tracking-wide bg-slate-100 p-8 rounded-2xl moveToRight">
                  Limitless Solutions helped us establish a fully staffed
                  office, including a dynamic call center with Turkish-speaking
                  representatives in Macedonia. With their comprehensive
                  outsourcing solution, we experienced remarkable growth,
                  expanding our team by 25+ professionals in 2 years. By
                  leveraging their expertise, we achieved up to 50% cost
                  savings. They are our trusted partner for outsourcing
                  excellence.
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
                    <div className="font-bold leading-none text-xl">Sedat</div>
                    <div className="opacity-70 font-bold text-xs">
                      International Client
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
