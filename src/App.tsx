import { RouterProvider } from 'react-router-dom';
import { ProductsProvider } from './hooks/items';
import React from 'react';
import { Router } from './routes/Router';

const App: React.FC = () => (
  <ProductsProvider>
    <RouterProvider router={Router} />
  </ProductsProvider>
);

export default App
