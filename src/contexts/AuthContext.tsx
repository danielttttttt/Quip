'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (username: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  isLoading: boolean;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock API functions
const mockAPI = {
  login: async (username: string, password: string): Promise<{ success: boolean; message: string; user?: User }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation - in real app, this would be server-side
    if (username === 'demo' && password === 'password') {
      return {
        success: true,
        message: 'Login successful',
        user: {
          id: '1',
          username: 'demo',
          email: 'demo@example.com'
        }
      };
    }
    
    return {
      success: false,
      message: 'Invalid username or password'
    };
  },

  signup: async (username: string, email: string, password: string): Promise<{ success: boolean; message: string; user?: User }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation
    if (username.length < 3) {
      return {
        success: false,
        message: 'Username must be at least 3 characters long'
      };
    }
    
    if (!email.includes('@')) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      };
    }
    
    if (password.length < 6) {
      return {
        success: false,
        message: 'Password must be at least 6 characters long'
      };
    }
    
    // Check if user already exists (mock check)
    if (username === 'demo') {
      return {
        success: false,
        message: 'Username already exists'
      };
    }
    
    return {
      success: true,
      message: 'Account created successfully',
      user: {
        id: Date.now().toString(),
        username,
        email
      }
    };
  }
};

// Auth Provider Component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('quip_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('quip_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<{ success: boolean; message: string }> => {
    setIsLoading(true);
    try {
      const response = await mockAPI.login(username, password);
      
      if (response.success && response.user) {
        setUser(response.user);
        localStorage.setItem('quip_user', JSON.stringify(response.user));
      }
      
      return { success: response.success, message: response.message };
    } catch (error) {
      return { success: false, message: 'An error occurred during login' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (username: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    setIsLoading(true);
    try {
      const response = await mockAPI.signup(username, email, password);
      
      if (response.success && response.user) {
        setUser(response.user);
        localStorage.setItem('quip_user', JSON.stringify(response.user));
      }
      
      return { success: response.success, message: response.message };
    } catch (error) {
      return { success: false, message: 'An error occurred during signup' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('quip_user');
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

