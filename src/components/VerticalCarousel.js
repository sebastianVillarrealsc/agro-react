import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './VerticalCarousel.css'; // Importamos el archivo CSS para estilos adicionales

const VerticalCarousel = () => {
  return (
    <div className="col-md-2">
      <Carousel indicators={false} controls={false} className="vertical-carousel">
        {[...Array(10)].map((_, idx) => (
          <Carousel.Item key={idx}>
            <img
              src={`https://via.placeholder.com/100x100?text=Ad+${idx + 1}`}
              alt={`Ad ${idx + 1}`}
              className="d-block w-100"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VerticalCarousel;


