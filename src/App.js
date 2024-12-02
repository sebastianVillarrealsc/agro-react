 
import React, { useContext } from 'react';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import UserRegistrationForm from './components/UserRegistrationForm';
import Cards from './components/Cards';
import AdvertisementCarousel from './components/AdvertisementCarousel';
import VerticalCarousel from './components/VerticalCarousel';

import TextColumns from './components/TextColumns';
import StarPopup from './components/Popup';
import { AuthContext, AuthProvider } from './authProvider';
import './App.css';

function App() {
  // Validación de autenticación desde el contexto
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App d-flex flex-column min-vh-100">
          {/* Barra de navegación */}
          <NavigationBar />

          {/* Contenido principal */}
          <main className="flex-grow-1">
            <Routes>
              {/* Página de inicio */}
              <Route
                path="/"
                element={
                  <div className="home-page">
                    <h1>Bienvenido a AgroReact</h1>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <AdvertisementCarousel />
                        </div>
                        <div className="col-md-6 mt-3 mt-md-0">
                          <VerticalCarousel />
                        </div>
                      </div>
                    </div>
                    <TextColumns />
                    <StarPopup />
                  </div>

                }
              />

              {/* Ruta para el login */}
              <Route path="/login" element={<LoginForm />} />

              {/* Ruta para el registro de usuarios */}
              <Route path="/register" element={<UserRegistrationForm />} />

              {/* Ruta protegida para la página de servicios */}
              <Route
                path="/services"
                element={
                  <ProtectedRoute>
                    <Cards />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>

          {/* Pie de página */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
