/** @format */

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Product } from '.';
import { SkeletonProduct } from './Product';

const ProductFeed = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 2000);
  }, [isMounted]);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-2 md:gap-5 p-2 mx-auto md:-mt-32 z-20'>
        {!isMounted && products.map(product => <SkeletonProduct key={product.id} />)}
        {isMounted && products.map(product => <Product key={product.id} {...product} />)}
      </div>
      <div className='relative md:col-span-full max-w-full h-20 mx-2 my-2'>
        <Image
          src='/photo1.jpg'
          alt='photo'
          layout='fill'
          objectFit='cover'
          className='rounded-md'
        />
      </div>
    </>
  );
};

export default ProductFeed;
