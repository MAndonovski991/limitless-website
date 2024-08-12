import Image from 'next/image';
import { MaterialSymbol } from 'react-material-symbols';

import { useTranslation } from '../../../utils/translationProvider';
import ContactForm from '../../../components/contactForm';
import ScrollToTop from '../../../components/scrollToTop';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = useTranslation(params && (params.locale as string));
  return {
    title: t('pages.contact.meta.title'),
    description: t('pages.contact.meta.description'),
  };
}

const Page = async ({ params }: { params: { locale: string } }) => {
  const t = useTranslation(params && (params.locale as string));

  return (
    <div className=" min-h-screen">
      <ScrollToTop />
      <div className="max-lg:min-h-fit lg:h-[65svh] -z-[1] bg-primary relative w-full flex flex-col justify-start lg:justify-start overflow-hidden px-8 lg:px-28 pt-[9%] pb-20 lg:pb-36 gap-0 rounded-b-3xl">
        <Image
          style={{ objectPosition: '0 70%' }}
          className="absolute left-0 top-0 w-full h-full object-cover zoomIn mix-blend-soft-light opacity-20 "
          width={1000}
          height={1000}
          alt="Handshake"
          src="/images/handshake.webp"
        />
        <h1 className="text-white font-bold  text-3xl lg:text-5xl pt-24 lg:pt-10 z-[2]">
          {t('pages.contact.title')}
        </h1>
        <p className="whitespace-pre-wrap leading-tight text-white text-lg z-[2]">
          {t('pages.contact.description')}
        </p>
      </div>
      <div className="bg-white w-full py-20 px-4 lg:px-36 z-10">
        <div className="overflow-hidden flex flex-col lg:flex-row items-stretch rounded-3xl shadow-2xl">
          <div className="w-full flex flex-col gap-8 max-lg:px-8 p-10 relative bg-primary">
            <Image
              className="absolute left-0 top-0 w-full h-full object-cover zoomIn mix-blend-soft-light opacity-20 "
              width={1000}
              height={1000}
              alt="Handshake"
              src="/images/connect1.webp"
            />
            <p className="text-white font-bold  text-2xl lg:text-3xl z-[2]">
              Limitless Solutions DOOEL
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
                    Dimitrie Chupovski 5-1
                    <br />
                    1000 Skopje
                    <br />
                    Republic of Macedonia
                  </p>
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-start gap-1">
                <a
                  target="_blank"
                  href="https://www.facebook.com/limitlesssolutionsmacedonia"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/icons/facebook.png"
                    alt="Facebook"
                    width={22}
                    height={22}
                  />
                </a>
              </div>
              <div className="flex items-start gap-1">
                <a
                  target="_blank"
                  href="https://www.instagram.com/limitlesssolutionsmk/"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/icons/instagram.png"
                    alt="Instagram"
                    width={22}
                    height={22}
                  />
                </a>
              </div>
              <div className="flex items-start gap-1">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/limitless-solutions-2019/"
                  rel="noreferrer"
                >
                  <Image
                    src="/images/icons/linkedin.png"
                    alt="LinkedIn"
                    width={22}
                    height={22}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="z-[2] w-full bg-white p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
