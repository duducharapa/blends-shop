import React, { ReactNode } from "react";
import Header from "../Header";
import { Footer } from "../Footer";
import CartButton from "../CartButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className='w-100 relative'>
      {children}
      <CartButton />
    </div>
    <Footer />
  </>


);

export {
  Layout
};