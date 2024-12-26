import React from 'react';
import './TextColumns.css';
import { useNavigate } from 'react-router-dom';

const TextColumns2 = () => {
  const navigate = useNavigate();

  const handleSearchByCategory = (category) => {
    navigate(`/buscar?categoria=${category}`);
  };

  return (
    <div className="container mt-4">
      {/* Segunda sección */}
      <div className="row border mt-3">
        <div className="col-md-12 text-section">
          <h1>Conoce nuestra Plataforma</h1>
          <h2>Al inscribirse el usuario podrá darse de alta como proveedor de servicios o requerir los mismos</h2>
          <a href="/register" className="btn btn-primary">Navegá a la página de contacto e inscribete</a>
        </div>
      </div>
    </div>
  );
};

export default TextColumns2;