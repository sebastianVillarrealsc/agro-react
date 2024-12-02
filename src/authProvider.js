import React, { createContext, useState, useMemo, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Restaurar el usuario desde localStorage si existe
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = useMemo(() => user !== null, [user]);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Guarda los datos del usuario
    localStorage.setItem('token', token); // Guarda el token
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Elimina los datos del usuario
    localStorage.removeItem('token'); // Elimina el token
  };

  useEffect(() => {
    // Validar el token en el futuro si lo necesitas
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
