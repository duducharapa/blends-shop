import { Button } from 'primereact/button';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routes/routes';

function CartButton() {
  let location = useLocation();

  const iconClassName = useMemo(
    () => location.pathname == routes.HOME ? 'pi-shopping-bag' : 'pi-arrow-circle-left',
    [location]
  );

  const redirectPath = useMemo(
    () => location.pathname == routes.HOME ? routes.CART : routes.HOME,
    [location]
  );

  return (
    <Link to={redirectPath}>
      <Button
        aria-label='Carrinho'
        className='fixed shadow-7 w-5rem h-5rem md:w-6rem md:h-6rem border-circle flex align-items-center justify-content-center'
        style={{ bottom: '1rem', right: '1rem' }}
      >
        <i className={`pi ${iconClassName} text-2xl md:text-3xl`}></i>
      </Button>
    </Link>
  );
}

export default CartButton;