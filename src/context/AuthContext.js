import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  const signup = async (name, email, password) => {
    if (!name || !email.includes('@') || password.length < 6) {
      throw new Error('All fields required. Email must be valid. Password must be at least 6 characters.');
    }

    const usersJSON = await AsyncStorage.getItem('users');
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    const userExists = users.find(u => u.email === email);
    if (userExists) {
      throw new Error('User with this email already exists.');
    }

    const newUser = { name, email, password };
    users.push(newUser);
    await AsyncStorage.setItem('users', JSON.stringify(users));

    setUser({ name, email });
    await AsyncStorage.setItem('user', JSON.stringify({ name, email }));
  };

  const login = async (email, password) => {
    if (!email.includes('@') || password.length < 6) {
      throw new Error('Invalid email or password format.');
    }
  
    const usersJSON = await AsyncStorage.getItem('users');
    const users = usersJSON ? JSON.parse(usersJSON) : [];
  
    const existingUser = users.find(u => u.email === email);
  
    if (!existingUser) {
      throw new Error('Email is not registered.');
    }
  
    if (existingUser.password !== password) {
      throw new Error('Incorrect password.');
    }
  
    const loggedInUser = { name: existingUser.name, email: existingUser.email };
    setUser(loggedInUser);
    await AsyncStorage.setItem('user', JSON.stringify(loggedInUser));
  };
  

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
