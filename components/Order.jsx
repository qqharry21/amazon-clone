/** @format */

import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { Currency } from '.';
import { OrderCurrency } from './Currency';

const Order = ({ id, amount, amountShipping, images, items, timestamp }) => {
  return (
    <div className='relative border rounded-md'>
      <div className='block sm:flex items-center sm:space-x-10 space-y-2 sm:space-y-0 p-5 bg-gray-100 text-sm text-gray-600'>
        <div className='sm:pt-0 pt-5 sm:block flex space-x-5 sm:space-x-0 items-center'>
          <p className='font-bold text-xs'>ORDER PLACED</p>
          <p className=''>{moment.unix(timestamp).format('DD-MM-YYYY')}</p>
        </div>
        <div className=''>
          <p className='font-bold text-xs'>TOTALS</p>
          <div className='block sm:flex items-center'>
            <OrderCurrency quantity={amount} currency='usd' />
            <div className='flex'>
              - Next Day Delivery&nbsp;
              <OrderCurrency quantity={amountShipping} currency='usd' />
            </div>
          </div>
        </div>

        <p className='text-sm whitespace-nowrap sm:text-lg self-end flex-1 text-right text-blue-500'>
          {items.length} items
        </p>

        <p className='absolute top-2 right-2 w-40 truncate lg:w-72 text-xs whitespace-nowrap'>
          ORDER # {id}
        </p>
      </div>

      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-auto'>
          {images?.map((image, index) => (
            <div className='relative h-12 sm:h-32 w-12 sm:w-32' key={index}>
              <Image src={image} alt='product' className='' objectFit='contain' layout='fill' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
