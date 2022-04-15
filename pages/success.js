/** @format */

import { CheckCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';

const SuccessPage = () => {
  const router = useRouter();
  return (
    <Layout title='Success'>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col p-10 bg-white shadow-lg'>
          <div className='flex items-center space-x-2 mb-5'>
            <CheckCircleIcon className='h-10 text-green-500' />
            <h1 className='text-3xl'>Thank you, your order has been confirmed!!</h1>
          </div>
          <p className=''>
            Thank you for shopping with us, We‘ll send a confirmation once your item has shipped, if
            you would like th check the status
          </p>
          <button className='button mt-8' onClick={() => router.push('/orders')}>
            Get to my orders
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessPage;
