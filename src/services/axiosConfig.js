import axios from 'axios'; // Asegúrate de que axios esté importado correctamente



// Crear una instancia de Axios configurada
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Cambia esta URL si es necesario
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Token enviado en el encabezado:', config.headers.Authorization); // Verificar token
    } else {
      console.warn('No hay token en localStorage.');
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default axiosInstance; // Asegúrate de exportar la instancia
