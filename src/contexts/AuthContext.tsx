import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthState } from '../types/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  users: [
    // Demo user
    { email: 'demo@gmail.com', password: 'password123', name: 'Demo User' }
  ],
  currentUser: null
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  const login = async (email: string, password: string) => {
    const user = authState.users.find(
      u => u.email === email && u.password === password
    );
    
    if (user) {
      setAuthState(prev => ({ ...prev, currentUser: user }));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string) => {
    // Check if user already exists
    if (authState.users.some(u => u.email === email)) {
      return false;
    }

    const newUser = { name, email, password };
    setAuthState(prev => ({
      ...prev,
      users: [...prev.users, newUser]
    }));
    return true;
  };

  const logout = () => {
    setAuthState(prev => ({ ...prev, currentUser: null }));
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!authState.currentUser,
      currentUser: authState.currentUser,
      login,
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}