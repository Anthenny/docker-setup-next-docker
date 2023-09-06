import './styles/app.scss';

import Nav from './components/Nav/page';
import Footer from './components/Footer/page';
import Head from 'next/head';

export const metadata = {
  title: 'Toensie Fitness',
  description: 'Fitness',
  icons: {
    icon: './logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Toensie Fitness</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@1,700&family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Nav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
