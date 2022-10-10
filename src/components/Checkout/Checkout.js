import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Container, Form, FormGroup, FormLabel } from "react-bootstrap";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCartContext();

  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const orden = {
      comprador: values,
      items: cart,
      total: cartTotal(),
    };
    const ordenesRef = collection(db, "orders");

    addDoc(ordenesRef, orden).then((doc) => {
      setOrderId(doc.id);
    });
    
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  if (orderId) {
    return (
      <Container className="mx-5">
        <h2>Compra realizada con exito!</h2>
        <hr />
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
        {clearCart()}
      </Container>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="Container m-5">
      <h1>Checkout</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <FormLabel>Nombre y apellido</FormLabel>
          <Form.Control
            required
            name="nombre"
            onChange={handleInputChange}
            value={values.nombre}
            type={"text"}
            placeholder="Nombre y Apellido"
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Dirección de correo electrónico</Form.Label>
          <Form.Control
            name="email"
            type={"email"}
            value={values.email}
            onChange={handleInputChange}
            placeholder="ejemplo@correo.com"
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <Form.Label>Dirección de Envio</Form.Label>
          <Form.Control
            required
            name="direccion"
            type={"text"}
            value={values.direccion}
            onChange={handleInputChange}
            placeholder="provincia, ciudad, calle Nro"
          />
        </FormGroup>
        <button type="submit" className="btn btn-primary">
          Realizar Compra
        </button>
      </Form>
    </div>
  );
};

export default Checkout;
