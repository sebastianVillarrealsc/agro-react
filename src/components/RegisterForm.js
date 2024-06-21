// src/components/RegisterForm.js
import React from 'react';

function RegisterForm() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#d4edda' }}>
      <div className="card p-4" style={{ width: '100%', maxWidth: '500px', backgroundColor: '#e9ecef' }}>
        <h2 className="text-center mb-4">Registro</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
