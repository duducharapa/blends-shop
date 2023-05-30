import { ReactElement } from 'react';
import { useItems } from '../../hooks/items';
import { ItemCard } from '../ItemCard';

/**
 * List that render the OrderItem items choosen by user.
 * @return {ReactElement} The list with item cards.
 */
const CartList = (): ReactElement => {
  const { items } = useItems();

  return (
    <div>
      {
        items.map((item) => <ItemCard item={item} />)
      }
    </div>
  );
};

export {
  CartList,
};
