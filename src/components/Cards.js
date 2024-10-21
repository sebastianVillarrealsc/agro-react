import React, { useState, useEffect } from 'react';
import { Button, Collapse, Form } from 'react-bootstrap';
import axios from 'axios'; // Para hacer fetch al backend
import './Cards.css'; // Archivo CSS para personalización de estilos

function Cards() {
  const [usuarios, setUsuarios] = useState([]);
  const [openForm, setOpenForm] = useState([]); // Estado para controlar qué formularios están abiertos
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para obtener los usuarios desde el backend
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/usuarios'); // Cambia el URL si es necesario
        setUsuarios(response.data);
        setOpenForm(Array(response.data.length).fill(false)); // Inicializar los formularios cerrados
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        setError('Hubo un problema al obtener los datos de los usuarios.');
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  // Función para alternar el estado del formulario desplegable
  const toggleForm = (index) => {
    const newOpenForm = [...openForm];
    newOpenForm[index] = !newOpenForm[index];
    setOpenForm(newOpenForm);
  };

  // Renderizado condicional basado en el estado de carga y error
  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {usuarios.map((usuario, index) => (
          <div className="col-md-4 mb-4" key={usuario.id}>
            <div className="card" style={{ width: '18rem', backgroundColor: '#f8f9fa', border: '5px solid #ddd' }}>
              {/* Mostrar la imagen si existe, o una imagen por defecto */}
              <img
                src={usuario.imagenUrl ? `http://localhost:3000/uploads/${usuario.imagenUrl}` : '/path/to/default/logo.png'}
                className="card-img-top"
                alt={usuario.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{usuario.empresa}</h5>
                {/* Botón para mostrar más detalles */}
                <Button
                  variant="primary"
                  onClick={() => toggleForm(index)}
                  aria-controls={`collapse-form-${index}`}
                  aria-expanded={openForm[index]}
                >
                  {openForm[index] ? 'Ocultar detalles' : 'Mostrar más detalles'}
                </Button>
                <Collapse in={openForm[index]}>
                  <div id={`collapse-form-${index}`} className="mt-3">
                    {/* Mostrar más detalles del usuario */}
                    <Form>
                      <p><strong>Nombre:</strong> {usuario.nombre}</p>
                      <p><strong>Apellido:</strong> {usuario.apellido}</p>
                      <p><strong>Email:</strong> {usuario.email}</p>
                      <p><strong>Teléfono:</strong> {usuario.telefono}</p>
                      <p><strong>Empresa:</strong> {usuario.empresa}</p>
                      <p><strong>Ciudad:</strong> {usuario.ciudad}</p>
                      <p><strong>Dirección:</strong> {usuario.direccion || 'No especificado'}</p>
                      <p><strong>País:</strong> {usuario.pais || 'No especificado'}</p>
                      <p><strong>Servicio Ofrecido:</strong> {usuario.servicioOfrecido || 'No especificado'}</p>
                      <p><strong>Servicio Requerido:</strong> {usuario.servicioRequerido || 'No especificado'}</p>
                      <p><strong>Capacidad Operativa:</strong> {usuario.capacidadOperativa || 'No especificado'}</p>
                    </Form>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
