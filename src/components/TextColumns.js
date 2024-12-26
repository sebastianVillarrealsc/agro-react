import React from 'react';
import './TextColumns.css';
import { useNavigate } from 'react-router-dom';

const TextColumns = () => {
  const navigate = useNavigate();

  const handleSearchByCategory = (category) => {
    navigate(`/buscar?categoria=${category}`);
  };

  return (
    <div className="container mt-4">
      <div className="row border main-section">
        <div className="col-md-12 text-section">
          <h2 className="main-title">LUGAR DE ENCUENTRO ENTRE PRESTADORES Y USUARIOS DE SERVICIOS RURALES</h2>
          <h2 className="sub-title">Sumate a la nueva forma de hacer Agronegocios</h2>
          <div className="button-container">
            {/* Iconos personalizados en cada botón */}
            <button className="icon-button" onClick={() => handleSearchByCategory('siembra')}>
              <i className="fas fa-tractor"></i> {/* Ícono de tractor */}
            </button>
            <button className="icon-button" onClick={() => handleSearchByCategory('fumigacion')}>
              <i className="fas fa-spray-can"></i> {/* Ícono de fumigación */}
            </button>
            <button className="icon-button" onClick={() => handleSearchByCategory('arrendamiento')}>
              <i className="fas fa-seedling"></i> {/* Ícono de arrendamiento */}
            </button>
            <button className="icon-button" onClick={() => handleSearchByCategory('alambrados')}>
              <i className="fas fa-hammer"></i> {/* Ícono de alambrados */}
            </button>

            {/* Botones adicionales con íconos personalizados */}
            <button className="icon-button" onClick={() => handleSearchByCategory('ganaderia')}>
              <i className="fas fa-cow"></i> {/* Ícono de ganadería */}
            </button>
            <button className="icon-button" onClick={() => handleSearchByCategory('riego')}>
              <i className="fas fa-water"></i> {/* Ícono de riego */}
            </button>
            <button className="icon-button" onClick={() => handleSearchByCategory('maquinaria')}>
              <i className="fas fa-wrench"></i> {/* Ícono de maquinaria */}
            </button>
            <button className="icon-button" onClick={() => handleSearchByCategory('compras')}>
              <i className="fas fa-shopping-cart"></i> {/* Ícono de compras */}
            </button>
            <button className="icon-button" onClick={() => handleSearchByCategory('ventas')}>
              <i className="fas fa-dollar-sign"></i> {/* Ícono de ventas */}
            </button>
            <button className="icon-button" onClick={() => handleSearchByCategory('consultoria')}>
              <i className="fas fa-user-tie"></i> {/* Ícono de consultoría */}
            </button>
            <button className="icon-button" onClick={() => handleSearchByCategory('logistica')}>
              <i className="fas fa-truck"></i> {/* Ícono de logística */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextColumns;
