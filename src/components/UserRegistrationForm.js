import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './UserRegistrationForm.css'; // Estilos

// Esquema de validación con Yup
const schema = Yup.object().shape({
  nombre: Yup.string().required('El nombre es obligatorio'),
  apellido: Yup.string().required('El apellido es obligatorio'),
  email: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
  telefono: Yup.string().required('El teléfono es obligatorio'),
  empresa: Yup.string(),
  ciudad: Yup.string().required('La ciudad es obligatoria'),
  direccion: Yup.string().required('La dirección es obligatoria'),
  pais: Yup.string().required('El país es obligatorio'),
  servicioOfrecido: Yup.string().required('El servicio ofrecido es obligatorio'),
  servicioRequerido: Yup.string().required('El servicio requerido es obligatorio'),
  capacidadOperativa: Yup.string().required('La capacidad operativa es obligatoria'),
  contrasena: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  imagen: Yup.mixed()
    .test('fileType', 'Solo se permiten imágenes (jpg, png)', (value) => {
      return value && value[0] && ['image/jpeg', 'image/png'].includes(value[0].type);
    })
    .required('Debe subir una imagen'),
});

function UserRegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === 'imagen') {
        formData.append(key, data[key][0]); // Adjuntar la imagen
      } else {
        formData.append(key, data[key]);
      }
    });

    try {
      await axios.post('http://localhost:3000/usuarios', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Usuario registrado exitosamente.');
      reset(); // Reinicia el formulario
      setTimeout(() => setMessage(''), 5000); // Limpia el mensaje después de 5 segundos
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error al registrar el usuario.');
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div className="register-form">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {[
          { label: 'Nombre', name: 'nombre', type: 'text' },
          { label: 'Apellido', name: 'apellido', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Teléfono', name: 'telefono', type: 'text' },
          { label: 'Empresa', name: 'empresa', type: 'text' },
          { label: 'Ciudad', name: 'ciudad', type: 'text' },
          { label: 'Dirección', name: 'direccion', type: 'text' },
          { label: 'País', name: 'pais', type: 'text' },
          { label: 'Servicio Ofrecido', name: 'servicioOfrecido', type: 'text' },
          { label: 'Servicio Requerido', name: 'servicioRequerido', type: 'text' },
          { label: 'Capacidad Operativa', name: 'capacidadOperativa', type: 'text' },
          { label: 'Contraseña', name: 'contrasena', type: 'password' },
          { label: 'Subir Imagen', name: 'imagen', type: 'file' },
        ].map((field, idx) => (
          <div key={idx} className="form-group">
            <label>{field.label}:</label>
            <input type={field.type} {...register(field.name)} />
            {errors[field.name] && <p>{errors[field.name].message}</p>}
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          Registrar Usuario
        </button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default UserRegistrationForm;
