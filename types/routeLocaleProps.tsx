import { ReactNode } from 'react';

export interface RouteProps {
  params: {
    locale: string;
  };
  children?: ReactNode;
}

export interface RoutePropsWithId {
  params: {
    locale: string;
    id: string;
  };
  children?: ReactNode;
}
