import { ReactElement } from 'react';
import maskPrice from '../../utils/maskPrice';

interface PriceLabelProps {
  price: number;
}

/**
 * The label UI to show the price of a specific product.
 * @param {PriceLabelProps} props The component props.
 * @param {number} props.price The price to show on label.
 * @return {ReactElement} The price label UI.
 */
const PriceLabel = ({ price }: PriceLabelProps): ReactElement => {
  return (
    <p className='text-md font-semibold'>
      <span className='text-lg mr-1'>R$</span>
      {maskPrice(price)}
      <span className='font-light text-xs ml-1'>por unidade</span>
    </p>
  );
};

export {
  PriceLabel,
};
