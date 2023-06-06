import { createContext } from 'react';

interface AuthContextType {
  token: string
  login: (accessCode: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export type {
  AuthContextType,
};

export {
  AuthContext,
};
