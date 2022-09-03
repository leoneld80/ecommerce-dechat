import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Item.css"

const Item = (props) => {
  const { title, image, price } = props;

  

  return (

    <Card className = "productCard"style={{ width: "15rem", textAlign: "center", margin: "10px" }}>
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
        <Col>
        Final:<span style={{ color: "red",fontWeight: "bold" }}> ${price}</span>
        </Col>
      </Row>
    </Card>


  );
};

export default Item;
