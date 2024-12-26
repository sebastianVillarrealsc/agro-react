import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../services/axiosConfig';

const EditarUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get(`/usuarios/one/${id}`);
        if (response?.data) setUsuario(response.data);
      } catch (err) {
        setError('No tienes permiso para editar este usuario.');
      }
    };

    fetchUsuario();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/usuarios/${id}`, usuario);
      navigate('/services');
    } catch (err) {
      setError('No se pudo actualizar la información.');
    }
  };

  if (error) return <div>{error}</div>;
  if (!usuario) return <div>Cargando...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={usuario.nombre}
          onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={usuario.email}
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        />
      </label>
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditarUsuario;
