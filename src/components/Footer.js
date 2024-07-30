import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Archivo CSS para estilos adicionales si es necesario

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Acerca de Nosotros</h5>
            <p>Somos una empresa dedicada a...</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Inicio</a></li>
              <li><a href="/services" className="text-white">Servicios</a></li>
              <li><a href="/contact" className="text-white">Contacto</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>Dirección: AVENIDA SIEMPRE VIVA 742, SAN CAYETANO</p>
            <p>Teléfono: (636) 555-372</p>
            <p>Email: contacto_agroreact@gmail.com</p>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 AgroReact. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;



