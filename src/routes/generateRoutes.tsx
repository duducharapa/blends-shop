import { Navigate, RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { routes } from './routes';
import { Login } from '../pages/Login';
import { Orders } from '../pages/Orders';

const generateRoutes = (isAuthenticated: boolean): RouteObject[] => {
  return [
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
      element: isAuthenticated ? <Navigate to={routes.ORDERS} /> : <Login />,
    },
    {
      path: routes.ORDERS,
      element: isAuthenticated ? <Orders /> : <Navigate to={routes.LOGIN} />,
    },
  ];
};

export {
  generateRoutes,
};
