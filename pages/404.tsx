'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import logo from '../assets/images/logo.png';

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '99vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 48,
        fontFamily: 'sans-serif',
        padding: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div style={{ fontSize: '86px' }}>404</div>
        <div style={{ fontSize: '24px' }}>
          <b>We can&apos;t find that page...</b> <br />
          Redirecting you back to our home page
        </div>
      </div>
      <Image alt="logo" width={300} src={logo} />
    </div>
  );
};

export default Error;
