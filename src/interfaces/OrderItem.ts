import Product from './Product';

interface OrderItem {
  product: Product;
  quantity: number;
}

interface OrderItemRequest {
  product_id: number;
  quantity: number;
}

export type {
  OrderItem,
  OrderItemRequest,
};
