import * as React from 'react';
import '../styles/bootstrap.min.css';
import '../styles/util.css';
import '../styles/main.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
