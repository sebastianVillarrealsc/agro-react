// src/components/TextColumns.js

import React from 'react';

const TextColumns = () => {
  return (
    <div className="container mt-4">
      <div className="row border">
        <div className="col-8 border" style={{ backgroundColor: 'gray' }}>
          <h1> LUGAR DE ENCUENTRO ENTRE PRESTADORES Y USUARIOS DE SERVICIOS RURALES </h1>
          <h2>sumate a la nueva forma de hacer agronegocios </h2>
        </div>
        <div className="col-4 border" style={{ backgroundColor: 'yellow' }}>
          <h2>ALGUNOS DE NUESTRO RUBROS </h2>
          <h4>metalmecanica, servicio de siembra,cosecha,pasturas ,fumigacion,barbechos quimicos,alambrador, gomeria 
            traslado de maquinaria,compra y venta de hacienda y muchos mas 
          </h4>
        </div>
      </div>
      <div className="row border mt-3">
      <div className="col-8 border" style={{ backgroundColor: 'gray' }}>
          <h1>conoce nuestra pagina </h1>
          <h2>al inscribirse el usuario podra darse de alta como 
            proovedor de srevicios o requerir los mismos
          </h2>
        </div>
        <div className="col-4 border" style={{ backgroundColor: 'yellow' }}>
          <h2>navega a la pagina de contacto e inscribete </h2>
        </div>
      </div>
      <div className="row border mt-3">
        <div className="col border">Columna 3</div>
      </div>
    </div>
  );
};

export default TextColumns;
