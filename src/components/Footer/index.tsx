import { ReactElement } from 'react';

/**
 * The footer layout for every page on application.
 * @return {ReactElement} The site static footer content.
 */
const Footer = (): ReactElement => (
  <div className='w-100 align-items-end text-center bg-primary py-3 mt-8'>
    <p className='font-light'>
      Developed by -
      <span className='font-bold'> Eduardo Charapa</span>
    </p>
  </div>
);

export {
  Footer,
};
