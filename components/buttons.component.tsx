'use client';

import { Button, Tooltip } from 'antd';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { MaterialSymbol } from 'react-material-symbols';

import logoWhite from '../assets/images/logo-side.png';

export const LoginButton = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-accent bg-opacity-70">
      <div className="p-24 flex flex-col items-center border border-1 border-solid rounded-2xl gap-4 bg-white bg-opacity-80">
        <Image
          src={logoWhite}
          width={350}
          className="px-8 py-6 transition-all duration-300 ease-in-out mb-12"
          alt="Limitless Logo"
        />
        <Button
          size="large"
          type="primary"
          style={{ marginRight: 10 }}
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export const LogoutButton = () => {
  return (
    <Tooltip placement="top" title="Sign Out">
      <Button
        shape="circle"
        className="border-none flex justify-center items-center mr-8"
        onClick={() => signOut()}
      >
        <MaterialSymbol icon="logout" />
      </Button>
    </Tooltip>
  );
};
