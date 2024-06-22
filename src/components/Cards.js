import React from 'react';

function Cards() {
  // Datos de ejemplo para las tarjetas
  const cardData = [
    { title: 'Card 1', text: 'Descripción del contratista 1', img: '...', link1: '#', link2: '#' },
    { title: 'Card 2', text: 'Descripción del contratista 2', img: '...', link1: '#', link2: '#' },
    { title: 'Card 3', text: 'Descripción del contratista 3', img: '...', link1: '#', link2: '#' },
    { title: 'Card 4', text: 'Descripción del contratista 4', img: '...', link1: '#', link2: '#' },
    { title: 'Card 5', text: 'Descripción del contratista 5', img: '...', link1: '#', link2: '#' },
    { title: 'Card 6', text: 'Descripción del contratista 6', img: '...', link1: '#', link2: '#' },
    { title: 'Card 7', text: 'Descripción del contratista 7', img: '...', link1: '#', link2: '#' },
    { title: 'Card 8', text: 'Descripción del contratista 8', img: '...', link1: '#', link2: '#' },
    { title: 'Card 9', text: 'Descripción del contratista 9', img: '...', link1: '#', link2: '#' },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: '18rem', backgroundColor: '#f8f9fa', border: '5px solid #ddd' }}>
              {/* 
                Para cambiar el fondo de la tarjeta, modifique el valor de backgroundColor en la línea anterior.
                Para cambiar el borde de la tarjeta, modifique el valor de border en la línea anterior.
              */}
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href={card.link1} className="card-link">Card link</a>
                <a href={card.link2} className="card-link">Another link</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

