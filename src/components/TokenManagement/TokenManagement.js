import React, { useState, useEffect } from 'react';
import axios from '../../services/axiosConfig'; // Axios configurado
import { Spinner, Alert, Form, Button, Table } from 'react-bootstrap';
import './TokenManagement.css'; // Estilos personalizados

const TokenManagement = () => {
  const [balance, setBalance] = useState(0);
  const [cantidad, setCantidad] = useState('');
  const [transacciones, setTransacciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener el balance actual y las transacciones al cargar
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // ID del usuario autenticado
        const balanceResponse = await axios.get(`/usuarios/balance`, {
          headers: {
            Authorization: `Bearer ${token}`, // Esquema Bearer
          },
        });
        const transaccionesResponse = await axios.get(`/transacciones`, {
          headers: {
            Authorization: `Bearer ${token}`, // Esquema Bearer
          },
        });
        setBalance(balanceResponse.data.balanceTokens);
        setTransacciones(transaccionesResponse.data);
      } catch (err) {
        console.error('Error al cargar los datos:', err.message || err.response?.data?.message);
        setError('No se pudieron cargar los datos. Intenta nuevamente más tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Manejar la compra de tokens
  const handleComprarTokens = async () => {
    try {
      const userId = localStorage.getItem('token'); // ID del usuario autenticado
      await axios.post('/tokens/comprar', { usuarioId: userId, cantidad: parseInt(cantidad) });
      alert('¡Tokens comprados con éxito!');
      setCantidad(''); // Resetear el formulario
      setBalance(balance + parseInt(cantidad)); // Actualizar balance local
    } catch (err) {
      console.error('Error al comprar tokens:', err.message || err.response?.data?.message);
      setError('Ocurrió un problema al procesar la compra.');
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Gestión de Tokens</h2>

      {/* Mostrar el balance */}
      <div className="mb-4">
        <h4>Balance de Tokens: <span className="text-primary">{balance}</span></h4>
      </div>

      {/* Formulario para comprar tokens */}
      <Form onSubmit={(e) => { e.preventDefault(); handleComprarTokens(); }}>
        <Form.Group className="mb-3">
          <Form.Label>Ingrese la cantidad de tokens que desea comprar</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            placeholder="Cantidad de tokens"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Comprar Tokens
        </Button>
      </Form>

      {/* Historial de transacciones */}
      <h3 className="mt-5">Historial de Transacciones</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Cantidad</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map((transaccion, index) => (
            <tr key={transaccion.id}>
              <td>{index + 1}</td>
              <td>{transaccion.cantidad}</td>
              <td>{new Date(transaccion.fecha).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};


export default TokenManagement;


