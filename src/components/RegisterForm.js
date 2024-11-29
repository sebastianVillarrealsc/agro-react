import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Proveedor de Insumos', // Valor predeterminado
  });
  const [userId, setUserId] = useState(null); // ID del usuario registrado
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [changeRoleSuccess, setChangeRoleSuccess] = useState(null);

  const rolesPermitidos = [
    'Publicidad',
    'Proveedor de Insumos',
    'Proveedor de Servicios',
    'Mecenas',
  ];

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Enviar datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:3000/usuarios', formData);
      setSuccess('Registro exitoso. ¡Bienvenido!');
      setUserId(response.data.id); // Guardar el ID del usuario registrado
      setFormData({ name: '', email: '', password: '', role: 'Proveedor de Insumos' });
    } catch (err) {
      console.error('Error al registrar:', err);
      setError('Hubo un problema con el registro. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Cambiar el rol de un usuario registrado
  const handleChangeRole = async (newRole) => {
    if (!userId) {
      setError('Primero debes registrarte para cambiar el rol.');
      return;
    }

    setChangeRoleSuccess(null);
    setError(null);

    try {
      await axios.patch(`http://localhost:3000/usuarios/${userId}/rol`, { rol: newRole });
      setChangeRoleSuccess(`Rol cambiado exitosamente a ${newRole}`);
      setFormData({ ...formData, role: newRole });
    } catch (err) {
      console.error('Error al cambiar el rol:', err);
      setError('Hubo un problema al cambiar el rol. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#d4edda' }}>
      <div className="card p-4" style={{ width: '100%', maxWidth: '500px', backgroundColor: '#e9ecef' }}>
        <h2 className="text-center mb-4">Registro</h2>

        {/* Mensajes de éxito o error */}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        {changeRoleSuccess && <div className="alert alert-info">{changeRoleSuccess}</div>}

        {/* Formulario de Registro */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Rol</label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              {rolesPermitidos.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrarse'}
            </button>
          </div>
        </form>

        {/* Botón para cambiar el rol */}
        <div className="mt-4">
          <h5 className="text-center">Cambiar Rol</h5>
          <div className="d-grid gap-2">
            {rolesPermitidos.map((role) => (
              <button
                key={role}
                className="btn btn-secondary"
                onClick={() => handleChangeRole(role)}
                disabled={!userId || formData.role === role}
              >
                {formData.role === role ? `Ya eres ${role}` : `Cambiar a ${role}`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
