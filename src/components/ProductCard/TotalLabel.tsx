import { ReactElement } from 'react';
import maskPrice from '../../utils/maskPrice';

interface TotalLabelProps {
  price: number;
  quantity: number;
}

/**
 * Label that shows the total value of a specific product using the product unit value
 * and the quantity choosen by user.
 * @param {TotalLabelProps} props The component props.
 * @param {number} props.price The price of product unit.
 * @param {number} props.quantity The quantity of products unit.
 * @return {ReactElement} The label UI with total price.
 */
const TotalLabel = ({ price, quantity }: TotalLabelProps): ReactElement => {
  const totalPrice = price * quantity;

  return (
    <div className='w-100 flex align-items-start'>
      <p className='font-light text-color font-semibold'>
        <span className='text-primary'>Total: </span>
        <span className='text-lg font-bold'>R$ </span>
        {maskPrice(totalPrice)}
      </p>
    </div>
  );
};

export {
  TotalLabel,
};
