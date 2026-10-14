import React, { createContext, useContext, useState, useEffect } from 'react';
import { api, saveToken, getToken, deleteToken } from '@/services/api';

interface AuthContextData {
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (id: number, senha: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storedToken = await getToken();
      if (storedToken) {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = async (id: number, senha: string) => {
    // Requisição para a rota POST /api/auth/login 🌐
    const response = await api.post('/auth/login', { id, senha });
    const { token } = response.data;

    await saveToken(token);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
    } finally {
      await deleteToken();
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}