import React, { useState, useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import axios from '../services/axiosConfig';
import './Cards.css';

const Cards = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mostrarMas, setMostrarMas] = useState({});

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {

        console.log('Iniciando solicitud GET a /usuarios');
        const response = await axios.get('/usuarios/all');
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

  const toggleMostrarMas = (id) => {
    setMostrarMas((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
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

  // Manejar el estado de error
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
                    ? `http://localhost:3300/uploads/${usuario.imagenUrl}`
                    : '/default/logo.png'
                }
                className="card-img-top"
                alt={usuario.nombre || 'Imagen predeterminada'}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              {/* Información básica */}
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

                {mostrarMas[usuario.id] && (
                  <div className="card-text">
                    {/* Información adicional */}
                    <p>
                      <strong>Email:</strong> {usuario.email || 'No especificado'}
                    </p>
                    <p>
                      <strong>Teléfono:</strong> {usuario.telefono || 'No especificado'}
                    </p>
                    <p>
                      <strong>Dirección:</strong> {usuario.direccion || 'No especificada'}
                    </p>
                    <p>
                      <strong>Balance de Tokens:</strong> {usuario.balanceTokens || 0}
                    </p>
                  </div>
                )}

                <button
                  className="btn btn-primary mt-2"
                  onClick={() => toggleMostrarMas(usuario.id)}
                >
                  {mostrarMas[usuario.id] ? 'Mostrar menos' : 'Mostrar más'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
