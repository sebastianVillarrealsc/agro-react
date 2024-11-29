import React, { useState, useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap'; // UX mejorada con Spinner
import axios from '../services/axiosConfig'; // Configuración personalizada de Axios
import './Cards.css'; // Estilos

const Cards = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        console.log('Iniciando solicitud GET a /usuarios');
        const response = await axios.get('/usuarios'); // Usamos axiosConfig con token
        console.log('Usuarios recibidos:', response.data);

        setUsuarios(response.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          console.error('Error de autenticación:', err.response.data.message);
          setError('No estás autorizado. Por favor, inicia sesión nuevamente.');
        } else {
          console.error('Error al obtener usuarios:', err.message || err.response?.data?.message);
          setError('Ocurrió un problema al obtener los datos.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

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
      <div className="row">
        {usuarios.map((usuario) => (
          <div className="col-md-4 mb-4" key={usuario.id}>
            <div className="card h-100 shadow-sm">
              {/* Imagen de usuario */}
              <img
                src={
                  usuario.imagenUrl
                    ? `http://localhost:3000/uploads/${usuario.imagenUrl}`
                    : '/default/logo.png'
                }
                className="card-img-top"
                alt={usuario.nombre || 'Imagen predeterminada'}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              {/* Información del usuario */}
              <div className="card-body">
                <h5 className="card-title text-primary">
                  {usuario.nombre || 'Usuario sin nombre'}
                </h5>
                <p>
                  <strong>Empresa:</strong> {usuario.empresa || 'No especificada'}
                </p>
                <p>
                  <strong>Rol:</strong> {usuario.rol || 'No asignado'}
                </p>
                <p>
                  <strong>Balance de Tokens:</strong> {usuario.balanceTokens || 0}
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
