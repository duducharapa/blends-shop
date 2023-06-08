import { ReactElement, ReactNode, useMemo, useState } from 'react';
import { AuthContext, AuthContextType } from './AuthContext';
import { getAuthToken } from '../../services/auth';

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps): ReactElement => {
  const TOKEN_STORAGE_KEY = 'BLENDSSHOP_TOKEN';
  const [token, setToken] = useState<string>(localStorage.getItem(TOKEN_STORAGE_KEY) || '');

  const login = async (accessCode: string, password: string): Promise<number> => {
    const { status, authToken } = await getAuthToken(accessCode, password);

    if (authToken) {
      setToken(authToken);
      localStorage.setItem(TOKEN_STORAGE_KEY, authToken);
    }

    return status;
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  };

  const isAuthenticated = useMemo(() => {
    console.log(token);

    return token != '';
  }, [token]);

  const contextValues: AuthContextType = {
    token,
    login,
    logout,
    isAuthenticated,
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
