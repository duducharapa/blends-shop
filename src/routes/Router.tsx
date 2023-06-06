import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { routes } from './routes';
import { Login } from '../pages/Login';

const Router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Home />,
  },
  {
    path: routes.CART,
    element: <Cart />,
  },
  {
    path: routes.LOGIN,
    element: <Login />,
  },
]);

export {
  Router,
};
