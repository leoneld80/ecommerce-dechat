import React, { useContext } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { CartContext } from "../../context/CartContext/CartContext";
import { BsTrash } from "react-icons/bs";
import "./Cart.css";
import { Link } from "react-router-dom";
// import ModalEmptyCart from "../../components/ModalEmptyCart/ModalEmptyCart";

const Cart = () => {
  const { cart, removeItem, clearCart, cartTotal } = useContext(CartContext);

  // const [precioTotal, setPrecioTotal] = useState("0");

  if (cart.length === 0) {
    return (
      <Container className="my-5">
        <h2>No hay productos en el carrito</h2>
        <div className="d-grid">
          <Link to="/">
            <Button variant="info">Ver lista de productos</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div className="container my-5">
      <h2>Carrito</h2>
      <hr />
      <Table responsive style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>id</th>
            <th>Titulo</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr key="{item.id}">
              <td>{item.id}</td>
              <td>
                {item.title}
                <div>
                  <img
                    src={item.imagen}
                    width="20%"
                    alt="imagen del producto"
                  ></img>
                </div>
              </td>
              <td>{item.cantidad}</td>
              <td>${item.price}</td>
              {}
              <div className="cartButtons">
                <BsTrash onClick={() => removeItem(item.id)} />
              </div>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className="">
        <Col className="precioTotal">
          <span><h3>Total a Pagar ${cartTotal()}</h3></span>
        </Col>

        <Col>
          {cart.length >= 0 ? (
            <div>
              <Button className="m-2" variant="warning" onClick={() => clearCart()}>
                Vaciar Carrito
              </Button>
              <Link className="btn btn-success" to="/checkout">
                Finalizar compra
              </Link>
            </div>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
