import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import AdvertisementCarousel from './components/Carousel';
import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm';
import Cards from './components/Cards';
// src/index.js o src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
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
                  <AdvertisementCarousel />
                </div>
              }
            />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<h2>esta pagina queda libre </h2>} />
            <Route path="/services" element={<Cards />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;