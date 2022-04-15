/** @format */

import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10'></div>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div className=''>
          <Image
            src='/photo1.jpg'
            alt='photo1'
            width={2000}
            height={560}
            objectFit='cover'
            loading='lazy'
          />
        </div>
        <div className=''>
          <Image
            src='/photo2.jpg'
            alt='photo1'
            width={2000}
            height={560}
            objectFit='cover'
            loading='lazy'
          />
        </div>
        <div className=''>
          <Image
            src='/photo3.jpg'
            alt='photo1'
            width={2000}
            height={560}
            objectFit='cover'
            loading='lazy'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
