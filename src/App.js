import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import UserRegistrationForm from './components/UserRegistrationForm';
import Cards from './components/Cards';
import AdvertisementCarousel from './components/AdvertisementCarousel';
import TextColumns from './components/TextColumns';
import TextColumns2 from './components/TextColumns2';
import StarPopup from './components/Popup';
import Weather from './components/Weather';
import EditarUsuario from './components/EditarUsuario'; // Verificar el path correcto
import TokenManagement from './components/TokenManagement/TokenManagement';
import { AuthContext } from './AuthContext';
import './App.css';

function App() {
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <NavigationBar />
        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-page">
                  <h1>Bienvenido a AgroReact</h1>
                  <TextColumns />
                  <div className="container">
                    <AdvertisementCarousel />
                  </div>
                  <TextColumns2 />
                  <StarPopup />
                  <Weather />
                </div>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<UserRegistrationForm />} />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Cards />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editar-usuario/:id"
              element={
                <ProtectedRoute>
                  <EditarUsuario />
                </ProtectedRoute>
              }
            />
            <Route
              path="/comprar-tokens"
              element={
                <ProtectedRoute>
                  <TokenManagement />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
