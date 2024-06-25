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
            alt="Publicidad 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/assets/Servicios/Riego.jpg'}
            alt="Publicidad 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/assets/Servicios/Enrolladora.jpg'}
            alt="Publicidad 3"
          />
        </Carousel.Item><Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/assets/Servicios/Agrimensura.jpg'}
            alt="Publicidad 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/assets/Servicios/Drone1.jpg'}
            alt="Publicidad 2"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AdvertisementCarousel;
