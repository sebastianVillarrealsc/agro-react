import React, { createContext, useState, useMemo, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    // Restaurar el usuario desde localStorage si existe
    const savedToken = localStorage.getItem('token');
    console.log('Token recibido:', savedToken);
    return savedToken ? savedToken : null;
  });

  const isAuthenticated = useMemo(() => token !== null, [token]);

  const login = (userData, token) => {
    setToken(token);
    localStorage.setItem('token', token); // Guarda el token
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Elimina el token
  };

  useEffect(() => {
    // Validar el token en el futuro si lo necesitas
  }, []);

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
