import { isAxiosError } from 'axios';
import Product from '../interfaces/Product';
import api from './api';

type ListProduts = () => Promise<Product[]>;

const listProducts: ListProduts = async () => {
  try {
    const { data, status } = await api.get<Product[]>('/products');
    if (status === 200) return data;
  } catch (err) {
    if (isAxiosError(err)) {
      console.log('error: ' + err.message);
    }
  }

  return [] as Product[];
};

export {
  listProducts,
};
