import React from 'react';
import {
  LoginButton,
} from "../../../components/buttons.component";
import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import LayoutComponents from "./layoutComponents";


const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <LoginButton></LoginButton>
  } else {
    return <LayoutComponents children={ children } params={ params }/>;
  }
};

export default Layout;
