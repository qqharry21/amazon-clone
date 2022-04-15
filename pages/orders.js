/** @format */

import moment from 'moment';
import { getSession, useSession } from 'next-auth/react';
import React from 'react';
import Layout from '../components/Layout';
import db from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Order } from '../components';

const OrderPage = ({ orders }) => {
  const { data: session } = useSession();

  return (
    <Layout title='Your Order'>
      <div className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-500'>Your Orders</h1>
        {session ? <h2>Orders</h2> : <h2>Please sign in to see your orders</h2>}

        <div className='mt-5 space-y-4'>
          {session && orders?.map(order => <Order {...order} key={order.id} />)}
        </div>
      </div>
    </Layout>
  );
};

export default OrderPage;

export const getServerSideProps = async context => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  // Get the users logged in credentials
  const session = await getSession(context);

  if (!session) return { props: {} };

  const ref = query(
    collection(db, `users/${session.user.email}/orders`),
    orderBy('timestamp', 'desc')
  );

  const snap = await getDocs(ref);
  const data = [];

  snap.forEach(doc => {
    const { amount, amount_shipping, images, timestamp } = doc.data();
    data.push({
      id: doc.id,
      amount: amount,
      amountShipping: amount_shipping,
      images: images,
      timestamp: moment(timestamp.toDate()).unix(),
    });
  });

  const orders = await Promise.all(
    data.map(async order => {
      return {
        ...order,
        items: (
          await stripe.checkout.sessions.listLineItems(order.id, {
            limit: 100,
          })
        ).data,
      };
    })
  );

  return {
    props: { orders },
  };
};
