import { ReactElement, ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import CartButton from '../CartButton';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Render the common UI components in every page of application.
 * @param {LayoutProps} props The component props.
 * @param {ReactNode} props.children The children content to be rendered inside the layout.
 * @return {ReactElement} The layout UI for each page.
 */
const Layout = ({ children }: LayoutProps): ReactElement => (
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
  Layout,
};
