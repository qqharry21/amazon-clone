/** @format */

import '../styles/globals.css';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { Meta } from '../components';
import { store } from '../app/store';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthProvider session={session}>
      <Provider store={store}>
        <Meta />
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
