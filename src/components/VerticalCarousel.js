import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './VerticalCarousel.css'; // Importamos el archivo CSS para estilos adicionales

// Array de rutas locales a las imágenes de los logos
const logoPaths = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
  '/logos/logo6.png',
  '/logos/logo7.png',
  '/logos/logo8.png',
  '/logos/logo9.png',
  '/logos/logo10.png'
];

const VerticalCarousel = () => {
  return (
    <div className="col-md-2">
      <Carousel indicators={false} controls={false} className="vertical-carousel">
        {logoPaths.map((path, idx) => (
          <Carousel.Item key={idx}>
            <img
              src={path}
              alt={`Logo ${idx + 1}`}
              className="d-block w-100"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VerticalCarousel;

