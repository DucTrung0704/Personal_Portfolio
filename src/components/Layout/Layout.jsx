import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import BackToTop from '../BackToTop/BackToTop';

export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        {children || <Outlet />}
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
