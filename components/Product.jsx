/** @format */

import { ChevronDownIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import toast from 'react-hot-toast';
import { Currency, RateStar } from '.';
const MAX_RATING = 5;

const Product = ({ id, title, price, description, category, image, rating }) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image, rating };

    // Sending the product as an action to REDUX store .. the basket slice
    try {
      dispatch(addToBasket(product));
      toast.success('Added Successfully!!');
    } catch (error) {
      toast.error('Something went wrong!!');
    }
  };

  return (
    <div className='flex flex-col rounded-md shadow hover:shadow-lg border border-gray-200 p-6 h-[475px] justify-between cursor-pointer transition-all duration-200 z-20 bg-white'>
      <div className='space-y-1'>
        <div className='relative w-full h-32 mx-auto'>
          {/* <span className='bg-gray-200 absolute w-full h-full'></span> */}
          <Image src={image} alt={title} layout='fill' objectFit='contain' className='' />
        </div>
        <h1 className='text-xl truncate'>{title}</h1>
        <div className='flex space-x-1 items-center'>
          <RateStar rating={rating.rate} />
          <ChevronDownIcon className='w-3 h-3' />
          <p className='text-blue-500 hover:text-blue-700'>{rating.count}</p>
        </div>
        <Currency price={price} />
        <div className='text-gray-600 text-sm sm:text-base'>
          <p className='text-gray-900 font-semibold'>About this item: </p>
          <p className='line-clamp-3'>{description}</p>
        </div>
      </div>
      <div className='block'>
        <p className='text-gray-500 text-sm mb-2 justify-end flex capitalize'>{category}</p>
        <button className='button' onClick={addItemToBasket}>
          <ShoppingCartIcon className='w-5 h-5' />
          <p className='font-medium min-w-fit'>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export const SkeletonProduct = () => {
  return (
    <div className='flex flex-col rounded-md shadow hover:shadow-lg border border-gray-200 p-6 h-[400px] justify-between bg-white z-20'>
      <div className='space-y-1 animate-pulse'>
        <div className='w-full h-32 mx-auto bg-gray-200 rounded-md'></div>
        <h1 className='bg-gray-200 rounded-md w-full h-6'></h1>
        <div className='w-20 h-5 bg-gray-200 rounded-md'></div>
        <div className='bg-gray-200 w-24 h-5 rounded-md'></div>
        <div className='bg-gray-200 w-full h-20 rounded-md'></div>
      </div>
      <div className='w-20 h-5 bg-gray-200 rounded-md animate-pulse'></div>
    </div>
  );
};

export default Product;
