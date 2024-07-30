import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import AdvertisementCarousel from './components/AdvertisementCarousel';
import VerticalCarousel from './components/VerticalCarousel';
import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm';
import Cards from './components/Cards';
import TextColumns from './components/TextColumns';
import StarPopup from './components/Popup'; // Importamos el popup

import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Muestra el popup después de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <NavigationBar />
        <main className="flex-grow-1">
          <Routes>
            <Route
              exact
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
                  <StarPopup show={showPopup} handleClose={handleClose} />
                </div>
              }
            />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<h2>esta pagina queda libre</h2>} />
            <Route
              path="/services"
              element={
                <div className="services-page">
                  <div className="container">
                    <div className="row">
                      <Cards />
                    </div>
                  </div>
                </div>
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
