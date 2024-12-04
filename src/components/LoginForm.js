import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario después del login
import { AuthContext } from '../AuthContext'; // Contexto para manejar la autenticación
import axios from '../services/axiosConfig'; // Instancia personalizada de Axios

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', contrasena: '' });
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Maneja los cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    setError(null); // Limpia errores previos

    try {
      // Llama al endpoint de login
      const response = await axios.post('http://localhost:3300/auth/login', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      const { token, user } = response.data;

      // Guarda el token en localStorage
      localStorage.setItem('token', token);

      // Actualiza el contexto con los datos del usuario autenticado
      login(user, token);

      // Redirige a la página de servicios
      navigate('/services');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);

      // Manejo de errores con mensajes claros
      const errorMsg =
        err.response?.data?.message || 'Error al iniciar sesión. Inténtalo nuevamente.';
      setError(errorMsg);
    }
  }; // Cerramos correctamente la función handleSubmit

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card p-4"
        style={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: '#f8f9fa',
        }}
      >
        <h2 className="text-center mb-4">Inicio de Sesión</h2>

        {/* Muestra el mensaje de error si existe */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
