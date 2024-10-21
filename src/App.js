import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import AdvertisementCarousel from './components/AdvertisementCarousel';
import VerticalCarousel from './components/VerticalCarousel';
import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm'; // Formulario de login
import UserRegistrationForm from './components/UserRegistrationForm'; // Formulario de registro de usuarios
import Cards from './components/Cards';
import TextColumns from './components/TextColumns';
import StarPopup from './components/Popup';
import './App.css'; // Estilos globales

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        {/* Barra de navegación */}
        <NavigationBar />

        {/* Contenido principal */}
        <main className="flex-grow-1">
          <Routes>
            {/* Página de inicio */}
            <Route
              exact
              path="/"
              element={
                <div className="home-page">
                  <h1>Bienvenido a AgroReact</h1>
                  <div className="container">
                    <div className="row">
                      {/* Carrusel de anuncios */}
                      <div className="col-md-6">
                        <AdvertisementCarousel />
                      </div>
                      {/* Carrusel vertical */}
                      <div className="col-md-6 mt-3 mt-md-0">
                        <VerticalCarousel />
                      </div>
                    </div>
                  </div>
                  {/* Secciones de columnas y popup */}
                  <TextColumns />
                  <StarPopup />
                </div>
              }
            />
            {/* Ruta para el login */}
            <Route path="/login" element={<RegisterForm />} /> 

            {/* Ruta para el formulario de registro de usuarios */}
            <Route path="/register" element={<UserRegistrationForm />} /> 

            {/* Ruta para los servicios */}
            <Route
              path="/services"
              element={
                <div className="services-page">
                  <div className="container">
                    <div className="row">
                      {/* Mostrar tarjetas de servicios */}
                      <Cards />
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
