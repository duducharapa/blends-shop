import { AuthProvider } from './hooks/auth';
import { ReactElement } from 'react';
import { Providers } from './components/Providers';

const App = (): ReactElement => {
  return (
    <AuthProvider>
      <Providers />
    </AuthProvider>
  );
};

export default App;

