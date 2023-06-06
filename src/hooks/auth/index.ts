import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { AuthProvider } from './AuthProvider';

const useAuth = () => useContext(AuthContext);

export {
  useAuth,
  AuthProvider,
};
