import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./ItemDetail.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const { cart, addToCart, isInCart } = useCartContext();
  console.log(cart);
  const handleAgregar = () => {
    // const sumarMismoItem = {

    // }

    const itemToCart = {
      id: item.id,
      price: item.price,
      title: item.title,
      cantidad: cantidad,
      imagen: item.image,
    };
    if (cart.find((item) => item.id === itemToCart.id)) {
      addToCart();
    }
    addToCart(itemToCart);
  };

  return (
    <Card style={{ textAlign: "center", margin: "10px" }}>
      <Row>
        <Col>
          <Card.Img variant="top" src={item.image} />
        </Col>
        <Col>
          <h4>{item.title}</h4>
          <Row>
            <Col className="rating">
              {[...Array(item.rate)].map((star, index) => {
                return (
                  <label key={index}>
                    {" "}
                    <BsStarFill></BsStarFill>
                  </label>
                );
              })}
              {[...Array(5 - item.rate)].map((star, index) => {
                return (
                  <label key={index}>
                    {" "}
                    <BsStar></BsStar>
                  </label>
                );
              })}
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Categoria: {item.category}</span>
            </Col>
          </Row>

          <Col>
            <span>6 Cuotas s/interés</span>
          </Col>
          <Row>
            <Col>
              <h3 style={{ fontWeight: "bold" }}>
                ${(item.price / 6).toFixed(2)}
              </h3>
            </Col>
          </Row>
          <Row className="mb-3" style={{ textAlign: "center" }}>
            <Col>
              Final:
              <span style={{ color: "red", fontWeight: "bold" }}>
                {" "}
                ${item.price}
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Stock: {item.stock}</span>
            </Col>
          </Row>
          <Row>
            <Col>
              {isInCart(item.id) ? (
                ""
              ) : (
                <ItemCount
                  stock={item.stock}
                  counter={cantidad}
                  setCounter={setCantidad}
                  onAdd={handleAgregar}
                ></ItemCount>
              )}
              {cart.length > 0 ? (
                <Link to="/cart">
                  <Button size="lg" className="d-grid gap-2 mb-2">
                    Revisar Carrito
                  </Button>
                </Link>
              ) : (
                ""
              )}
              <Row className="d-grid gap-2 mb-2">
                {cart.length > 0 ? (
                  <Link to="/">
                    <Button size="lg">Seguir Comprando</Button>
                  </Link>
                ) : (
                  ""
                )}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
