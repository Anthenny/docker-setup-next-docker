import '../styles/app.scss';
import Nav from './components/Nav/page';
import Footer from './components/Footer/page';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
