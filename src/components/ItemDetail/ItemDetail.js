import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./ItemDetail.css";
import { BsStarFill } from "react-icons/bs";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  const { title, image, price, category, stock, rate } = props;
  console.log(typeof rate);
  return (
    <Card
      
      style={{ textAlign: "center", margin: "10px" }}
    >
      <Row>
        <Col>
          <Card.Img variant="top" src={image} />
        </Col>
        <Col>
          <h4>{title}</h4>
          <Row>
            <Row>
              <Col>
                {[...Array(rate)].map((star) => {
                  return (
                    <label>
                      {" "}
                      <BsStarFill></BsStarFill>
                    </label>
                  );
                })}
              </Col>
              <Row>
                <Col>
                  <span>Categoria: {category}</span>
                </Col>
              </Row>
            </Row>
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
              Final:
              <span style={{ color: "red", fontWeight: "bold" }}>
                {" "}
                ${price}
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Stock: {stock}</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <ItemCount></ItemCount>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
