import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./ItemDetail.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1)

  const onAdd = () => {
    console.log({
      ...item,
      cantidad
    })
  }
  
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
                  <label key={index }>
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
              <ItemCount 
              stock={item.stock}
              counter={cantidad}
              setCounter={setCantidad}
              onAdd = {onAdd}
              ></ItemCount>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
