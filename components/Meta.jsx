/** @format */

import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { url } from '../lib/url';

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <meta name='keywords' content={keywords} />
        {/* Only use for this clone project */}
        <link rel='icon' href='/amazon_logo.png' />
      </Head>
      <DefaultSeo
        defaultTitle={title}
        titleTemplate='Amazon %s'
        openGraph={{
          type: 'website',
          locale: 'zh_TW',
          url: url,
          description: description,
          site_name: title,
          images: [],
        }}
        canonical={url}
      />
    </>
  );
};

Meta.defaultProps = {
  title: 'Amazon. Spend less. Smile more.',
  keywords: 'web development, programming, web design, react js, tailwindcss, next js, clone',
  description: "Amazon's clone project.",
};

export default Meta;
