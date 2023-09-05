import './styles/app.scss';

import Nav from './components/Nav/page';
import Footer from './components/Footer/page';
import Head from "next/head";

export const metadata = {
    title: 'Toensie Fitness',
    description: 'Fitness',
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <title>Toensie Fitness</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&family=Roboto:wght@400;700&display=swap"
                rel="stylesheet"></link>
        </Head>
        <body>
        <Nav/>
        <div>{children}</div>
        <Footer/>
        </body>
        </html>
    );
}
