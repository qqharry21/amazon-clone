/** @format */

import Image from 'next/image';
import React, { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { selectCount } from '../slices/basketSlice';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const count = useSelector(selectCount);

  return (
    <header className=''>
      {/* top nav */}
      <div className='flex items-center bg-main p-1 flex-grow py-2 space-x-4'>
        {/* Left */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            alt='amazon'
            objectFit='contain'
            width={150}
            height={40}
            onClick={() => {
              router.push('/');
            }}
            className='cursor-pointer'
          />
        </div>
        {/* Search */}
        <div className='sm:flex bg-yellow-400 hover:bg-yellow-500 hidden h-10 rounded-md flex-grow cursor-pointer items-center'>
          <input
            type='text'
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none'
          />
          <SearchIcon className='h-10 p-3' />
        </div>
        {/* Right */}
        <div className='flex text-white space-x-1 sm:space-x-6 items-center px-1 sm:px-6 whitespace-nowrap text-xs'>
          <div className='link hidden sm:inline-block' onClick={!session ? signIn : signOut}>
            <p className=''>{session ? `Hello, ${session.user.name}` : 'Sign In'}</p>
            <p className='font-bold flex items-center md:text-sm'>
              Account & Lists
              {isOpen ? (
                <ChevronUpIcon className='w-5 h-5 ml-1' />
              ) : (
                <ChevronDownIcon className='w-5 h-5 ml-1' />
              )}
            </p>
          </div>
          <div className='link hidden sm:inline-block' onClick={() => router.push('/orders')}>
            <p className=''>Returns</p>
            <p className='font-bold md:text-sm'>& Orders</p>
          </div>
          <div className='flex items-end link relative' onClick={() => router.push('/checkout')}>
            <div className='relative'>
              <ShoppingCartIcon className='sm:w-10 sm:h-10 w-7 h-7' />
              <span className='bg-yellow-400 top-0 right-0 h-4 w-4 text-center absolute rounded-full text-black font-bold text-xs'>
                {count}
              </span>
            </div>
            <p className='font-bold md:text-sm hidden sm:block'>Cart</p>
          </div>
          <MenuIcon className='w-7 h-7 sm:w-10 sm:h-10 sm:hidden block' />
        </div>
      </div>
      {/* bottom nav (category) */}
      <div className='flex items-center space-x-3 p-2 pl-6 text-white bg-main-light'>
        <p className='link flex'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'> Category</p>
        <p className='link'> Category</p>
        <p className='link hidden lg:inline-flex'> Category</p>
        <p className='link hidden lg:inline-flex'> Category</p>
      </div>
    </header>
  );
};

export default Header;
