/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com', 'links.papareact.com', 'media.giphy.com'],
  },
  env: {
    STRIPE_PUBLIC_KEY:
      'pk_test_51KpBayHq5oUUy15ejJMbpqKjj3uM7hCw97gj3WOAY6LZhZubFkujchQ7Caf5kknhqbb4niO4UflkVAEzx0nPNEot00C0Q5NihO',
  },
};

module.exports = nextConfig;
