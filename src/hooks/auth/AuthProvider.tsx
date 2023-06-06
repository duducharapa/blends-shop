import React, { ReactNode, useState } from 'react';
import { AuthContext, AuthContextType } from './AuthContext';
import { getAuthToken } from '../../services/auth';

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>('');

  const login = async (accessCode: string, password: string) => {
    const authToken = await getAuthToken(accessCode, password);
    setToken(authToken);
  };

  const logout = () => {
    setToken('');
  };

  const contextValues: AuthContextType = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthProvider,
};
