import { createContext } from 'react';

interface AuthContextType {
  token: string
  login: (accessCode: string, password: string) => Promise<number>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export type {
  AuthContextType,
};

export {
  AuthContext,
};
