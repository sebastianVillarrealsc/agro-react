import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './AdvertisementCarousel.css'; // Importamos el archivo CSS para estilos adicionales

const AdvertisementCarousel = () => {
  return (
    <div className="col-md-8"> {/* Contenedor del carrusel horizontal ocupando 8 columnas */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/assets/Servicios/Siembra.jpg'}
            alt="campo sembrado en hileras uniformes "
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/assets/Servicios/Riego.jpg'}
            alt="equipo de riego basculante hidroimpulsado "
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/assets/Servicios/Enrolladora.jpg'}
            alt="maquina enrrolladora y tractor "
          />
        </Carousel.Item><Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/assets/Servicios/Agrimensura.jpg'}
            alt="sistema topografico de medicion inteligente "
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/assets/Servicios/Drone1.jpg'}
            alt="drone volando "
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AdvertisementCarousel;
