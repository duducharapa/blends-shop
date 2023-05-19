import { ReactNode, useState } from "react";
import { OrderItemContext, OrderItemContextType } from "./OrderItemContext";
import OrderItem from "../../interfaces/OrderItem";

interface ProductProviderProps {
  children: ReactNode
}

const ProductsProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [ items, setItems ] = useState<OrderItem[]>([]);

  const addItem = (item: OrderItem) => {
    setItems([ ...items, item ]);
  }

  const contextValues: OrderItemContextType = {
    items,
    addItem
  };

  return (
    <OrderItemContext.Provider value={contextValues}>
      {children}
    </OrderItemContext.Provider>
  );
};

export default ProductsProvider;