import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

const AdvertisementCarousel = () => {
  return (
    <div className="carousel-container">
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
        {/* Agrega más elementos del carrusel aquí */}
      </Carousel>
    </div>
  );
};

export default AdvertisementCarousel;

