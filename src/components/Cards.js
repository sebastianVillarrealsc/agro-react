import React, { useState, useEffect } from 'react';
import { Alert, Spinner, Form, Button } from 'react-bootstrap';
import axios from '../services/axiosConfig';
import './Cards.css';

const Cards = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ciudad, setCiudad] = useState('');
  const [servicio, setServicio] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  // Obtener todos los usuarios al cargar
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('/usuarios/all');
        setUsuarios(response.data);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  // Manejar errores
  const handleError = (err) => {
    if (err.response && err.response.status === 401) {
      setError('No estás autorizado. Por favor, inicia sesión nuevamente.');
    } else {
      setError('Ocurrió un problema al obtener los datos.');
    }
  };

  // Filtrar usuarios por servicio y ubicación
  const handleFiltrarPorCategoria = async () => {
    if (!servicio.trim()) {
      setError('Por favor, ingresa un servicio para buscar.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/usuarios/buscar-por-categoria', {
        params: { servicio, ubicacion },
      });
      setUsuarios(response.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar usuarios por ciudad
  const handleFiltrarPorCiudad = async () => {
    if (!ciudad.trim()) {
      setError('Por favor, ingresa una ciudad para filtrar.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/usuarios/filtrar-por-ciudad', {
        params: { ciudad },
      });
      setUsuarios(response.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Usuarios Registrados</h2>

      {/* Barra de búsqueda por servicio y ubicación */}
      <div className="mb-4">
        <Form className="d-flex justify-content-center">
          <Form.Control
            type="text"
            placeholder="Ingresa un servicio"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            style={{ maxWidth: '300px', marginRight: '10px' }}
          />
          <Form.Control
            type="text"
            placeholder="Ingresa una ubicación (opcional)"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            style={{ maxWidth: '300px', marginRight: '10px' }}
          />
          <Button variant="primary" onClick={handleFiltrarPorCategoria}>
            Buscar por Servicio
          </Button>
        </Form>
      </div>

      {/* Filtro por ciudad */}
      <div className="mb-4">
        <Form className="d-flex justify-content-center">
          <Form.Control
            type="text"
            placeholder="Ingresa una ciudad para filtrar"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            style={{ maxWidth: '300px', marginRight: '10px' }}
          />
          <Button variant="primary" onClick={handleFiltrarPorCiudad}>
            Filtrar por Ciudad
          </Button>
        </Form>
      </div>

      {/* Tarjetas de usuarios */}
      <div className="row">
        {usuarios.map((usuario) => (
          <div className="col-md-4 mb-4" key={usuario.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={
                  usuario.imagenUrl
                    ? `http://localhost:3300/uploads/${usuario.imagenUrl}`
                    : '/default/logo.png'
                }
                className="card-img-top"
                alt={usuario.nombre || 'Imagen predeterminada'}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p>
                  <strong>Empresa:</strong> {usuario.empresa || 'No especificada'}
                </p>
                <p>
                  <strong>Rol:</strong> {usuario.rol || 'No asignado'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
