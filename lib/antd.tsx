'use client';

import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { FC, ReactNode } from 'react';

export const Theme: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <StyleProvider hashPriority="high">
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#65b2e8',
        },
      }}
    >
      {children}
    </ConfigProvider>
  </StyleProvider>
);
