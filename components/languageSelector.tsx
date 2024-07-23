'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Select } from 'antd';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const flagMap: { [key: string]: string } = {
  en: 'gb',
};

const { Option } = Select;

const LanguageSelector = ({ locale }: { locale: string }) => (
  <div>
    <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
    <Select bordered={false} value={locale}>
      <Option value="en">
        <Link
          href="/en"
          onClick={() => {
            document.cookie = 'NEXT_LOCALE=en';
          }}
          className="flex align-middle gap-2"
        >
          <Image
            width={24}
            height={3}
            className="object-contain"
            src="https://flagcdn.com/w20/gb.png"
            alt="Great Britain"
          />
          English
        </Link>
      </Option>
    </Select>
  </div>
);

export default LanguageSelector;
