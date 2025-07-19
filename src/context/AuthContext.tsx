import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextType } from '../hooks/useAuth';

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<string | null>;
  signup: (name: string, email: string, password: string) => Promise<string | null>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUserFromStorage = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('currentUser');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user from storage', error);
      }
    };

    loadUserFromStorage();
  }, []);

 const login = async (email: string, password: string): Promise<string | null> => {
  email = email.trim().toLowerCase();
  password = password.trim();

  if (!email || !password) return 'Please enter email and password';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';

  const storedUsers = await AsyncStorage.getItem('users');
  if (storedUsers) {
    const users: User[] = JSON.parse(storedUsers);
    console.log("users:",users)
    const existingUser = users.find(
      user => user.email.toLowerCase() === email && user.password === password
    );
    if (existingUser) {
      setUser(existingUser);
      await AsyncStorage.setItem('currentUser', JSON.stringify(existingUser));
      return null;
    } else {
      return 'Invalid email or password';
    }
  } else {
    console.log("No users found. Please signup first")
    return 'No users found. Please signup first.';
  }
};

  const signup = async (name: string, email: string, password: string) => {
    if (!name || !email || !password) return 'All fields are required';
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) return 'Invalid email format';
    if (password.length < 6) return 'Password must be at least 6 characters';

    const newUser: User = { name, email, password };
    const storedUsers = await AsyncStorage.getItem('users');
    let users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    const existingUser = users.find(user => user.email === email);
    if (existingUser) return 'Email already in use';

    users.push(newUser);
    await AsyncStorage.setItem('users', JSON.stringify(users));

    setUser(newUser);
    await AsyncStorage.setItem('currentUser', JSON.stringify(newUser));
    return null;
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
