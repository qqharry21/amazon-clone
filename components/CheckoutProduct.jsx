/** @format */

import { MinusSmIcon, PlusSmIcon, TrashIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { RateStar, Currency } from '.';
import {
  addToBasket,
  removeFromBasket,
  addOneToBasket,
  removeOneFromBasket,
} from '../slices/basketSlice';
const CheckoutProduct = ({ id, title, description, category, image, price, rating, number }) => {
  const dispatch = useDispatch();

  const addOne = () => {
    dispatch(addOneToBasket({ id }));
  };

  const removeOne = () => {
    if (number === 1) {
      if (confirm('Are you sure you want to remove this item?')) {
        removeItemFromBasket();
      }
    } else {
      dispatch(removeOneFromBasket({ id }));
    }
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    toast.success('Removed Successfully!!');
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-5 pb-4'>
      <Image src={image} alt={title} width={200} height={200} objectFit='contain' priority />
      {/* Center */}
      <div className='col-span-3 mx-5'>
        <p className=''>{title}</p>
        <div className='flex'>
          <RateStar rating={rating.rate} />
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <div className='flex items-end justify-between mb-2 sm:mb-0'>
          <Currency price={price} />
          <p className='text-xs text-gray-400 capitalize'>{category}</p>
        </div>
      </div>
      {/* Right */}
      <div className='flex flex-col space-y-2 my-auto justify-center sm:justify-self-end'>
        <div className='flex items-center space-x-5 justify-center'>
          <button className='button w-9 h-9' onClick={removeOne}>
            <MinusSmIcon className='w-5 h-5' />
          </button>
          <p className=''>{number}</p>
          <button className='button w-9 h-9' onClick={addOne}>
            <PlusSmIcon className='w-5 h-5' />
          </button>
        </div>
        <button className='button' onClick={removeItemFromBasket}>
          <TrashIcon className='w-5 h-5' />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
