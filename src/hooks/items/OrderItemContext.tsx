import { createContext } from 'react';
import OrderItem from '../../interfaces/OrderItem';

interface OrderItemContextType {
  items: OrderItem[];
  addItem: (item: OrderItem) => void;
}

const OrderItemContext = createContext<OrderItemContextType>({} as OrderItemContextType);

export { OrderItemContext };
export type { OrderItemContextType };