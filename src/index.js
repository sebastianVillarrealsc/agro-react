import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthProvider } from './AuthContext'; // Importa el AuthProvider

const container = document.getElementById('root'); // Seleccionar el contenedor donde se renderizará la app
const root = createRoot(container); // Crear una instancia de createRoot

root.render(
  <React.StrictMode>
    <AuthProvider> {/* Envuelve la app con AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
