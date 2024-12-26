import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const BarraBusqueda = ({ onBuscar }) => {
  const [servicio, setServicio] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleBuscar = () => {
    if (servicio.trim() || ubicacion.trim()) {
      onBuscar({ servicio, ubicacion });
    }
  };

  return (
    <div className="barra-busqueda mb-4">
      <Form>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <Form.Control
              type="text"
              placeholder="Buscar por servicio..."
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              className="mb-2"
            />
          </Col>
          <Col xs={12} md={5}>
            <Form.Control
              type="text"
              placeholder="Tu ubicación..."
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              className="mb-2"
            />
          </Col>
          <Col xs={12} md={2}>
            <Button variant="primary" onClick={handleBuscar} block>
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BarraBusqueda;
