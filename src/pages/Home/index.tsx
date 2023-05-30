import { useCallback, useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import classNames from './home.module.css';
import Product from '../../interfaces/Product';
import { listProducts } from '../../services/products';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);
  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = useCallback(async () => {
    const data = await listProducts();

    setProducts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) getProducts();
  }, [getProducts, loading]);

  return (
    <Layout>
      <div className='my-5 flex flex-column'>
        <h1 className={`text-4xl text-center mb-3 text-primary ${classNames.title}`}>Confira nossos produtos</h1>

        <div className='grid grid-nogutter px-3 gap-3 justify-content-center'>
          {
            products.map((item) => (
              <div className='col-12 md:col-5 lg:col-3' key={item.id}>
                <ProductCard product={item} />
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  );
};

export {
  Home,
};
