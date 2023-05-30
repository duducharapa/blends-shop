import { ReactNode, useState } from 'react';
import { OrderItemContext, OrderItemContextType } from './OrderItemContext';
import { OrderItem } from '../../interfaces/OrderItem';

interface ProductProviderProps {
  children: ReactNode
}

const ProductsProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [ items, setItems ] = useState<OrderItem[]>([]);

  const addItem = (item: OrderItem) => {
    setItems([ ...items, item ]);
  };

  const removeItem = ({ product }: OrderItem) => {
    setItems(items.filter(({ product: actualProduct }) => product.id != actualProduct.id));
  };

  const clearItems = () => {
    setItems([]);
  };

  const contextValues: OrderItemContextType = {
    items,
    addItem,
    removeItem,
    clearItems,
  };

  return (
    <OrderItemContext.Provider value={contextValues}>
      {children}
    </OrderItemContext.Provider>
  );
};

export default ProductsProvider;
