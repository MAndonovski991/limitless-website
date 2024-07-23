'use client';

import React from 'react';
import {
  LogoutButton,
} from "../../../components/buttons.component";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { MaterialSymbol } from "react-material-symbols";
import { Layout as AntLayout, Menu } from 'antd';
import { useSession } from "next-auth/react";
import logoWhite from '../../../assets/images/logo-side-white.png';
const { Header, Sider, Content, Footer } = AntLayout;

const LayoutComponents = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const router = useRouter();
  const session = useSession();
  return (
    <AntLayout >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <Image
              src={logoWhite}
              className="max-h-full px-8 py-6 transition-all duration-300 ease-in-out mb-12"
              alt="Limitless Logo"
            />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={info => {
            router.push(info.keyPath.reverse().join(''));
          }}
          items={[
            {
              key: '/admin/users',
              icon: <MaterialSymbol icon="group" size={20} />,
              label: 'Users',
            },
            {
              key: '/admin/joboffers',
              icon: <MaterialSymbol icon="toc" size={20} />,
              label: 'Job Positions',
            },
            {
              key: '/admin/candidates',
              icon: <MaterialSymbol icon="account_circle" size={20} />,
              label: 'Candidates',
            },
          ]}
        />
      </Sider>
      <AntLayout style={{ minHeight: "80vh" }}>
        <Header style={{ padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'end' }} className=" bg-slate-100 gap-4">
          Welcome, {session?.data?.user?.name}
          <LogoutButton/>
        </Header>
        <Content >
          <div
            style={{
              padding: 24,
              minHeight: '95vh',
              background: '#fff',
            }}
          >
            {children}
          </div>
        </Content>
        {/* <Footer style={{ position: "sticky", bottom: "0", height: 30, textAlign: 'center' }}>
          Limitless Solutions ©2023
        </Footer> */}
      </AntLayout>
    </AntLayout>
  );
};

export default LayoutComponents;
