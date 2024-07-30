import React, { useState } from 'react';
import { Button, Collapse, Form } from 'react-bootstrap';
//import './Cards.css'; // Archivo CSS opcional para estilos adicionales

function Cards() {
  const cardData = [
    { title: 'Empresa 1', text: 'Descripción del contratista 1', img: '/path/to/logo1.png', link1: '#', link2: '#' },
    { title: 'Empresa 2', text: 'Descripción del contratista 2', img: '/path/to/logo2.png', link1: '#', link2: '#' },
    { title: 'Empresa 3', text: 'Descripción del contratista 3', img: '/path/to/logo3.png', link1: '#', link2: '#' },
    { title: 'Empresa 4', text: 'Descripción del contratista 4', img: '/path/to/logo4.png', link1: '#', link2: '#' },
    { title: 'Empresa 5', text: 'Descripción del contratista 5', img: '/path/to/logo5.png', link1: '#', link2: '#' },
    { title: 'Empresa 6', text: 'Descripción del contratista 6', img: '/path/to/logo6.png', link1: '#', link2: '#' },
    { title: 'Empresa 7', text: 'Descripción del contratista 7', img: '/path/to/logo7.png', link1: '#', link2: '#' },
    { title: 'Empresa 8', text: 'Descripción del contratista 8', img: '/path/to/logo8.png', link1: '#', link2: '#' },
    { title: 'Empresa 9', text: 'Descripción del contratista 9', img: '/path/to/logo9.png', link1: '#', link2: '#' },
  ];

  const [openForm, setOpenForm] = useState(Array(cardData.length).fill(false));

  const toggleForm = (index) => {
    const newOpenForm = [...openForm];
    newOpenForm[index] = !newOpenForm[index];
    setOpenForm(newOpenForm);
  };

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: '18rem', backgroundColor: '#f8f9fa', border: '5px solid #ddd' }}>
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <Button
                  variant="primary"
                  onClick={() => toggleForm(index)}
                  aria-controls={`collapse-form-${index}`}
                  aria-expanded={openForm[index]}
                >
                  Ver más detalles
                </Button>
                <Collapse in={openForm[index]}>
                  <div id={`collapse-form-${index}`} className="mt-3">
                    <Form>
                      <Form.Group controlId={`formCompany${index}`}>
                        <Form.Label>Empresa</Form.Label>
                        <Form.Control type="text" placeholder="Nombre de la empresa" />
                      </Form.Group>
                      <Form.Group controlId={`formName${index}`}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" />
                      </Form.Group>
                      <Form.Group controlId={`formAddress${index}`}>
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" placeholder="Dirección" />
                      </Form.Group>
                      <Form.Group controlId={`formIndustry${index}`}>
                        <Form.Label>Rubro</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Descripción detallada del rubro" />
                      </Form.Group>
                      <Form.Group controlId={`formContact${index}`}>
                        <Form.Label>Contacto</Form.Label>
                        <Form.Control type="text" placeholder="Información de contacto" />
                      </Form.Group>
                      <Button variant="primary" type="submit" className="mt-3">
                        Enviar
                      </Button>
                    </Form>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;


