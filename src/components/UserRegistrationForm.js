import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './UserRegistrationForm.css'; // Asegúrate de que esté el archivo CSS si necesitas estilos

// Esquema de validación con Yup para todos los campos
const schema = Yup.object().shape({
  nombre: Yup.string().required('El nombre es obligatorio'),
  apellido: Yup.string().required('El apellido es obligatorio'),
  email: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
  telefono: Yup.string().required('El teléfono es obligatorio'),
  empresa: Yup.string(),
  ciudad: Yup.string().required('La ciudad es obligatoria'),
  direccion: Yup.string().required('La dirección es obligatoria'),
  pais: Yup.string().required('El país es obligatorio'),
  registroRequerido: Yup.string().required('El registro requerido es obligatorio'),
  registroOfrecido: Yup.string().required('El registro ofrecido es obligatorio'),
  capacidadOperativa: Yup.string().required('La capacidad operativa es obligatoria'),
  imagen: Yup.mixed().required('Debe subir una imagen'),
});

function UserRegistrationForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('nombre', data.nombre);
    formData.append('apellido', data.apellido);
    formData.append('email', data.email);
    formData.append('telefono', data.telefono);
    formData.append('empresa', data.empresa);
    formData.append('ciudad', data.ciudad);
    formData.append('direccion', data.direccion);
    formData.append('pais', data.pais);
    formData.append('registroRequerido', data.registroRequerido);
    formData.append('registroOfrecido', data.registroOfrecido);
    formData.append('capacidadOperativa', data.capacidadOperativa);
    formData.append('imagen', data.imagen[0]); // Adjuntar la imagen

    try {
      const response = await axios.post('http://localhost:3000/usuarios', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Usuario registrado exitosamente.');
      reset(); // Reiniciar el formulario
    } catch (error) {
      setMessage('Error al registrar el usuario.');
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div className="register-form">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" {...register('nombre')} />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>
        
        <div className="form-group">
          <label>Apellido:</label>
          <input type="text" {...register('apellido')} />
          {errors.apellido && <p>{errors.apellido.message}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input type="text" {...register('telefono')} />
          {errors.telefono && <p>{errors.telefono.message}</p>}
        </div>

        <div className="form-group">
          <label>Empresa:</label>
          <input type="text" {...register('empresa')} />
        </div>

        <div className="form-group">
          <label>Ciudad:</label>
          <input type="text" {...register('ciudad')} />
          {errors.ciudad && <p>{errors.ciudad.message}</p>}
        </div>

        <div className="form-group">
          <label>Dirección:</label>
          <input type="text" {...register('direccion')} />
          {errors.direccion && <p>{errors.direccion.message}</p>}
        </div>

        <div className="form-group">
          <label>País:</label>
          <input type="text" {...register('pais')} />
          {errors.pais && <p>{errors.pais.message}</p>}
        </div>

        <div className="form-group">
          <label>Registro Requerido:</label>
          <input type="text" {...register('registroRequerido')} />
          {errors.registroRequerido && <p>{errors.registroRequerido.message}</p>}
        </div>

        <div className="form-group">
          <label>Registro Ofrecido:</label>
          <input type="text" {...register('registroOfrecido')} />
          {errors.registroOfrecido && <p>{errors.registroOfrecido.message}</p>}
        </div>

        <div className="form-group">
          <label>Capacidad Operativa:</label>
          <input type="text" {...register('capacidadOperativa')} />
          {errors.capacidadOperativa && <p>{errors.capacidadOperativa.message}</p>}
        </div>

        <div className="form-group">
          <label>Subir Imagen:</label>
          <input type="file" {...register('imagen')} />
          {errors.imagen && <p>{errors.imagen.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary">Registrar Usuario</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default UserRegistrationForm;
