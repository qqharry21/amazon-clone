/** @format */

import { ShoppingBagIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Layout from '../components/Layout';
import { selectCount, selectItems, selectTotal } from '../slices/basketSlice';
import * as MathUtil from '../lib/utils/MathUtil.js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const CheckoutPage = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const count = useSelector(selectCount);
  const total = useSelector(selectTotal);
  const router = useRouter();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend to create a checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
      email: session.user.email,
    });

    // redirect to stripe checkout page

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) toast.error(result.error.message);
  };

  return (
    <Layout title='Checkout'>
      <div className='lg:flex max-w-screen-2xl mx-auto h-[88vh]'>
        {/* Left */}
        <div className='flex-grow m-5 shadow-md h-fit bg-white'>
          <Image src='/photo2.jpg' width={1000} height={250} objectFit='cover' alt='photo' />

          <div className='flex flex-col p-5 space-y-4 bg-white'>
            <h1 className='text-3xl'>Your Shopping Cart</h1>
            <hr className='border-gray-300 pb-4' />
            {items.length === 0 ? (
              <div className='flex space-x-5 items-center justify-around'>
                <div className='flex flex-col space-y-5 font-bold mr-4'>
                  <p className='text-main-light text-5xl capitalize'>Your cart is empty!!</p>
                  <button
                    className='capitalize button'
                    onClick={() => {
                      router.push('/');
                    }}>
                    <ShoppingBagIcon className='w-5 h-5' />
                    <p className='font-medium'>Pick something</p>
                  </button>
                </div>
                <Image
                  src='https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif'
                  width={300}
                  height={300}
                  objectFit='contain'
                  alt='photo'
                  className='rounded-lg'
                  priority
                />
              </div>
            ) : (
              items.map((item, index) => <CheckoutProduct key={index} {...item} />)
            )}
          </div>
        </div>
        {/* Right */}
        {count > 0 && (
          <div className='flex flex-col bg-white p-10 shadow-lg'>
            <h2 className='whitespace-nowrap'>
              Subtotal ({count} items) :
              <span className='font-bold'> {MathUtil.roundToTwo(total)}</span>
            </h2>
            <button
              className={`capitalize button mt-2 px-4 ${
                !session &&
                'from-gray-300 to-gray-500 border-green-200 text-gray-300 cursor-not-allowed'
              }`}
              disabled={!session}
              role='link'
              onClick={createCheckoutSession}>
              {!session ? 'Sign in to checkout' : 'Buy Now'}
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CheckoutPage;
