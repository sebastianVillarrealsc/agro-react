import React, { useState } from 'react';

const UserForm = () => {
  // Definimos el estado para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cui: '',
    empresa: '',
    telefono: '',
    email: '',
    direccion: '',
    ciudad: '',
    pais: '',
    servicioOfrecido: '',
    servicioRequerido: '',
    capacidadOperativa: '',
  });

  // Manejar el cambio en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Hacemos la solicitud POST al backend (NestJS)
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Verificamos si la solicitud fue exitosa
      if (response.ok) {
        alert('Usuario creado exitosamente');
        // Limpiamos el formulario después de enviar los datos
        setFormData({
          nombre: '',
          apellido: '',
          cui: '',
          empresa: '',
          telefono: '',
          email: '',
          direccion: '',
          ciudad: '',
          pais: '',
          servicioOfrecido: '',
          servicioRequerido: '',
          capacidadOperativa: '',
        });
      } else {
        alert('Hubo un error al crear el usuario');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Hubo un problema con la solicitud.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Apellido</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>CUI</label>
        <input
          type="number"
          name="cui"
          value={formData.cui}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Empresa</label>
        <input
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Teléfono</label>
        <input
          type="number"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Dirección</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Ciudad</label>
        <input
          type="text"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>País</label>
        <input
          type="text"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Servicio Ofrecido</label>
        <input
          type="text"
          name="servicioOfrecido"
          value={formData.servicioOfrecido}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Servicio Requerido</label>
        <input
          type="text"
          name="servicioRequerido"
          value={formData.servicioRequerido}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Capacidad Operativa</label>
        <input
          type="text"
          name="capacidadOperativa"
          value={formData.capacidadOperativa}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Crear Usuario</button>
    </form>
  );
};

export default UserForm;
