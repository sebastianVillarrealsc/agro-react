import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/" className="navbar-logo">
        AgroReact
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/register" className="navbar-link">Registro</Nav.Link>
          <Nav.Link as={Link} to="/login" className="navbar-link">Login</Nav.Link>
          <Nav.Link as={Link} to="/services" className="navbar-link">Servicios</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;

