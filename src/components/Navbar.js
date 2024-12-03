import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../AuthContext';
import './Navbar.css';

const NavigationBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirige al login después de cerrar sesión
  };

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
