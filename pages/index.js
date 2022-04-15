/** @format */

import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Banner, ProductFeed } from '../components';
import Layout from '../components/Layout';

export default function Home({ products }) {
  return (
    <Layout className=''>
      <div className='max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductFeed products={products} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async context => {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
  return {
    props: { products },
  };
};
