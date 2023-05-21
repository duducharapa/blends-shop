import CartButton from '../../components/CartButton';
import { CartList } from '../../components/CartList';
import { Layout } from '../../components/Layout';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useMemo } from 'react';
import maskPrice from '../../utils/maskPrice';
import { useItems } from '../../hooks/items';

const Cart = () => {
  const { items } = useItems();

  const totalValue = useMemo(() => {
    return items.reduce((total,item) => {
      const { product, quantity } = item;
      const totalProduct = product.price * quantity;
      
      return total + totalProduct;
    }, 0)
  }, [items]);
  
  return (
    <Layout>
      <div className='mt-5 h-screen p-fluid'>
        <div className='px-5'>
          <Link to={routes.HOME}>
            <i className='pi pi-arrow-left text-primary text-3xl' />
          </Link>
        </div>

        <div className='w-100 px-5'>
          <CartList />
        </div>
        
        <div className='w-100 px-5 mt-3 flex justify-content-between text-2xl text-color font-semibold'>
          <p>Total:</p>
          <p>
            <span className='font-bold text-3xl'>R$ </span>
            {maskPrice(totalValue)}
          </p>
        </div>
      </div>

      <CartButton />
    </Layout>
  );
}

export {
  Cart
};