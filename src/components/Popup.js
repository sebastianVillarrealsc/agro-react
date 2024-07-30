// src/components/Popup.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Popup.css';

function StarPopup({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered className="star-popup">
      <Modal.Header closeButton>
        <Modal.Title>INGRESE A AGROREACT</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="star-popup">
          <svg className="star-svg" viewBox="0 0 24 24">
            <polygon
              points="12,2 15,8 22,8 17,12 19,18 12,14 5,18 7,12 2,8 9,8"
              fill="gold"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
          <p>Este es un pop-up en forma de estrella que aparece después de 5 segundos.</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StarPopup;
