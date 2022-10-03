import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalEmptyCart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleEmptyCart = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEmptyCart}>
            Vaciar Carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEmptyCart;
