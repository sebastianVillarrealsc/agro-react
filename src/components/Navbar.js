import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../AuthContext';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';


const NavigationBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirige al login después de cerrar sesión
  };


  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'lhzbwHj8nXKiWpi68IoMgH6RiPWHXIhA'; // Reemplaza con tu clave API de AccuWeather
  const city = 'San Cayetano';

  const getLocationUrl = (city) => 
    `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;

  const getWeatherUrl = (locationKey) => 
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=es-es`;

  const fetchLocationKey = async () => {
    try {
      const locationResponse = await axios.get(getLocationUrl(city));
      if (locationResponse.data.length > 0) {
        const locationKey = locationResponse.data[0].Key;
        fetchWeather(locationKey);
      }
    } catch (error) {
      console.error("Error al obtener el Location Key", error);
    }
  };

  const fetchWeather = async (locationKey) => {
    try {
      const weatherResponse = await axios.get(getWeatherUrl(locationKey));
      setWeatherData(weatherResponse.data[0]);
    } catch (error) {
      console.error("Error al obtener el pronóstico del tiempo", error);
    }
  };

  useEffect(() => {
    fetchLocationKey();
  }, []);

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/" className="navbar-logo">
        AgroReact
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!isAuthenticated ? (
            <>
              <Nav.Link as={Link} to="/register" className="navbar-link">
                Registro
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="navbar-link">
                Login
              </Nav.Link>

              {/* Información del clima */}
              {weatherData && (
              <div className="navbar-weather-info">
                <span>{city}</span>
                <span>{weatherData.Temperature.Metric.Value}°C</span>
                <span>{weatherData.WeatherText}</span>
              </div>
              )}

              {/* Íconos de redes sociales */}
              <div className="navbar-social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>

            </>

          ) : (
            <>
              {/* Redirige a la página de servicios */}
              <Nav.Link as={Link} to="/services" className="navbar-link">
                Servicios
              </Nav.Link>
              {/* Nuevo botón para compra de tokens */}
              <Nav.Link as={Link} to="/comprar-tokens" className="navbar-link">
                Comprar Tokens
              </Nav.Link>
              <Button
                variant="outline-danger"
                className="ml-2"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </Button>
            </>
          )}


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
