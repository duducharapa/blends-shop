import { Image } from 'primereact/image';
import classNames from './header.module.css';
import image from '../../assets/coffee.svg';
import { ReactElement } from 'react';

/**
 * The header layout for every page on application.
 * @return {ReactElement} The site static header content.
 */
const Header = (): ReactElement => (
  <header
    className='h-10rem flex align-items-center justify-content-center shadow-3 bg-primary'
  >
    <div className='flex align-items-center'>
      <Image src={image} width='48' />
      <h1 className={`ml-3 text-6xl ${classNames.logoname}`}>Blend's Shop</h1>
    </div>
  </header>
);

export {
  Header,
};
