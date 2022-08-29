import React from "react";
import {  Card, Col, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const Item = (props) => {
  const { title, image, price, stock} = props;

  return (
    <Card style={{ width: "18rem", textAlign: "center", margin: "10px" }}>
      <Card.Img variant="top" src={image} />
      <Row>
        <Col>
          <h4>{title}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>6 Cuotas s/interés</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 style={{ fontWeight: "bold" }}>${(price / 6).toFixed(2)}</h3>
        </Col>
      </Row>
      <Row className="mb-3" style={{ textAlign: "center" }}>
        <Col></Col>

        <h4 style={{ color: "red" }}>Final: ${price}</h4>

        <span>Stock: {stock}</span>
        <ItemCount stock={stock} initial={1} />
      </Row>
    </Card>
  );
};

export default Item;
