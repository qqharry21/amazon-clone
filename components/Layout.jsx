/** @format */

import { NextSeo } from 'next-seo';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './Header';

const Layout = ({ children, title, description, className }) => {
  return (
    <div className='h-screen'>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <Header />
      <main className='flex'>{children}</main>

      <Toaster position='bottom-right' reverseOrder={false} />
    </div>
  );
};

export default Layout;
