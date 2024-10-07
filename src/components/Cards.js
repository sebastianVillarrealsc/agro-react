import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para obtener los usuarios desde el backend
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:3000/usuarios');
        setUsuarios(response.data); // Guardar los usuarios obtenidos en el estado
        setLoading(false); // Cambiar el estado de carga
      } catch (error) {
        setError('Error al obtener los usuarios'); // Manejar el error
        setLoading(false);
      }
    };

    fetchUsuarios(); // Llamar a la función de fetch cuando el componente se monte
  }, []);

  // Manejar el estado de carga
  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  // Manejar el estado de error
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="card-container">
      {usuarios.map((usuario) => (
        <div key={usuario.id} className="card">
          <h3>{usuario.nombre}</h3>
          <p>Apellido: {usuario.apellido}</p>
          <p>Ciudad: {usuario.ciudad}</p>
          <p>Correo: {usuario.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsuariosList;
