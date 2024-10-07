import React, { useState, useEffect } from 'react';
import { Button, Collapse, Form } from 'react-bootstrap';
import axios from 'axios'; // Para hacer fetch al backend

function Cards() {
  const [usuarios, setUsuarios] = useState([]);
  const [openForm, setOpenForm] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para obtener los usuarios desde el backend
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/usuarios'); // Asegúrate de que el backend esté corriendo en este puerto
        setUsuarios(response.data);
        setOpenForm(Array(response.data.length).fill(false)); // Inicializar los formularios cerrados
        setLoading(false); // Desactivar el estado de carga una vez obtenidos los datos
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        setError('Hubo un problema al obtener los datos de los usuarios.'); // Mostrar un mensaje de error en la UI
        setLoading(false); // Asegurar que se desactiva el estado de carga incluso en caso de error
      }
    };

    fetchUsuarios(); // Llamamos a la función cuando el componente se monta
  }, []);

  // Función para alternar el estado del formulario desplegable
  const toggleForm = (index) => {
    const newOpenForm = [...openForm];
    newOpenForm[index] = !newOpenForm[index];
    setOpenForm(newOpenForm);
  };

  // Renderizado condicional basado en el estado de carga y error
  if (loading) {
    return <p>Cargando usuarios...</p>; // Mensaje de carga mientras se obtienen los datos
  }

  if (error) {
    return <p>{error}</p>; // Mostrar el mensaje de error en la UI
  }

  return (
    <div className="container">
      <div className="row">
        {usuarios.map((usuario, index) => (
          <div className="col-md-4 mb-4" key={usuario.id}>
            <div className="card" style={{ width: '18rem', backgroundColor: '#f8f9fa', border: '5px solid #ddd' }}>
              <img src="/path/to/default/logo.png" className="card-img-top" alt={usuario.nombre} />
              <div className="card-body">
                <h5 className="card-title">{usuario.empresa}</h5>
                <p>{usuario.servicioOfrecido}</p>
                <Button
                  variant="primary"
                  onClick={() => toggleForm(index)}
                  aria-controls={`collapse-form-${index}`}
                  aria-expanded={openForm[index]}
                >
                  Ver más detalles
                </Button>
                <Collapse in={openForm[index]}>
                  <div id={`collapse-form-${index}`} className="mt-3">
                    <Form>
                      <Form.Group controlId={`formCompany${index}`}>
                        <Form.Label>Empresa</Form.Label>
                        <Form.Control type="text" value={usuario.empresa} readOnly />
                      </Form.Group>
                      <Form.Group controlId={`formName${index}`}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={usuario.nombre} readOnly />
                      </Form.Group>
                      <Form.Group controlId={`formAddress${index}`}>
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" value={usuario.direccion} readOnly />
                      </Form.Group>
                      <Form.Group controlId={`formCity${index}`}>
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control type="text" value={usuario.ciudad} readOnly />
                      </Form.Group>
                      <Form.Group controlId={`formEmail${index}`}>
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" value={usuario.email} readOnly />
                      </Form.Group>
                      <Form.Group controlId={`formPhone${index}`}>
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" value={usuario.telefono} readOnly />
                      </Form.Group>
                      <Form.Group controlId={`formServiceRequired${index}`}>
                        <Form.Label>Servicio Requerido</Form.Label>
                        <Form.Control type="text" value={usuario.servicioRequerido} readOnly />
                      </Form.Group>
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
