/** @format */

import React from 'react';

const Currency = ({ price }) => {
  const priceFront = price.toString().split('.')[0];
  const priceBack = price.toString().split('.')[1];
  return (
    <div className='flex'>
      <p className=''>$</p>
      <p className='text-2xl font-medium'>{priceFront}</p>
      <p className=''>{priceBack}</p>
    </div>
  );
};

export const OrderCurrency = ({ quantity, currency }) => {
  return (
    <div className='flex space-x-1 text-sm'>
      <p className=''>{globalCurrency.find(cur => cur.title === currency).label}</p>
      <p className=''>{quantity}</p>
    </div>
  );
};

const globalCurrency = [
  { title: 'usd', label: '$' },
  { title: 'eur', label: '€' },
  { title: 'gbp', label: '£' },
  { title: 'jpy', label: '¥' },
  { title: 'cny', label: '¥' },
  { title: 'aud', label: '$' },
  { title: 'cad', label: '$' },
  { title: 'chf', label: 'Fr' },
  { title: 'dkk', label: 'kr' },
  { title: 'hkd', label: '$' },
  { title: 'idr', label: 'Rp' },
  { title: 'ils', label: '₪' },
  { title: 'inr', label: '₹' },
  { title: 'krw', label: '₩' },
  { title: 'mxn', label: '$' },
  { title: 'myr', label: 'RM' },
  { title: 'nok', label: 'kr' },
  { title: 'php', label: '₱' },
  { title: 'sgd', label: '$' },
  { title: 'zar', label: 'R' },
  { title: 'sek', label: 'kr' },
  { title: 'sgd', label: '$' },
  { title: 'thb', label: '฿' },
  { title: 'try', label: '₺' },
  { title: 'twd', label: 'NT$' },
  { title: 'vnd', label: '₫' },
];

export default Currency;
