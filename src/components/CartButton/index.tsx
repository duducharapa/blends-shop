import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import classNames from './cart-button.module.css';
import { useItems } from '../../hooks/items';

function CartButton() {
  const { items, clearItems } = useItems();
  const toast = useRef<Toast>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const iconClassName = useMemo(
    () => location.pathname == routes.HOME ? 'pi-shopping-bag' : 'pi-check-circle',
    [location]
  );

  const generateOrder = () => {
    if (items.length < 1) {
      return toast.current?.show({ severity: 'error', summary: 'Pedido vazio!', detail: 'Seu pedido não possui itens!' });
    }

    toast.current?.show({ severity: 'success', summary: 'Sucesso!', detail: 'Pedido feito com sucesso!' });
    return clearItems();
  }

  const onClick = () => {
    const { pathname } = location;

    if (pathname == routes.HOME) {
      return navigate(routes.CART);
    }

    generateOrder();
  }

  return (
    <>
      <Button
        aria-label='Carrinho'
        className={`
          fixed shadow-7 w-5rem h-5rem md:w-6rem md:h-6rem border-circle flex align-items-center justify-content-center
          ${classNames.cartbutton}
        `}
        onClick={onClick}
      >
        <i className={`pi ${iconClassName} text-2xl md:text-3xl`}></i>
      </Button>
      <Toast ref={toast} />
    </>
  );
}

export default CartButton;