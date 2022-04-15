/** @format */

import { url } from '../../lib/url';

/** @format */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const handler = async (req, res) => {
  const { items, email } = req.body;

  const transformItems = items.map(item => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: item.price * 100,
      product_data: { name: item.title, images: [item.image] },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1KpEPpHq5oUUy15eZuBhyf3L'],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    line_items: transformItems,
    mode: 'payment',
    success_url: `${url}/success`,
    cancel_url: `${url}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map(item => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};

export default handler;
