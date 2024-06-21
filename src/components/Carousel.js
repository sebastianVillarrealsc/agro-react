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
            src="https://via.placeholder.com/800x400?text=Publicidad+1"
            alt="Publicidad 1"
          />
          <Carousel.Caption>
            <a href="https://www.publicidad1.com" className="btn btn-primary">Visitar Publicidad 1</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Publicidad+2"
            alt="Publicidad 2"
          />
          <Carousel.Caption>
            <a href="https://www.publicidad2.com" className="btn btn-primary">Visitar Publicidad 2</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Publicidad+3"
            alt="Publicidad 3"
          />
          <Carousel.Caption>
            <a href="https://www.publicidad3.com" className="btn btn-primary">Visitar Publicidad 3</a>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Agrega más elementos del carrusel aquí */}
      </Carousel>
    </div>
  );
};

export default AdvertisementCarousel;

