import './styles/app.scss';

import Nav from './components/Nav/page';
import Footer from './components/Footer/page';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
