import { ReactElement } from 'react';
import { useAuth } from '../../hooks/auth';
import { ProductsProvider } from '../../hooks/items';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { generateRoutes } from '../../routes/generateRoutes';

const Providers = (): ReactElement => {
  const { isAuthenticated } = useAuth();

  const router = createBrowserRouter(generateRoutes(isAuthenticated));

  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  );
};

export {
  Providers,
};
