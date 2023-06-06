import { RouterProvider } from 'react-router-dom';
import { ProductsProvider } from './hooks/items';
import React from 'react';
import { Router } from './routes/Router';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <ProductsProvider>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </ProductsProvider>
);

export default App;

