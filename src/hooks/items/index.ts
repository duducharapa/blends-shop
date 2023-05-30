import { useContext } from 'react';
import ProductsProvider from './ProductProvider';
import { OrderItemContext } from './OrderItemContext';

const useItems = () => useContext(OrderItemContext);

export {
  ProductsProvider,
  useItems,
};
