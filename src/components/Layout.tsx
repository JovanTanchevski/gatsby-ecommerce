import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
