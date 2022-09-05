import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./ItemDetail.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  const { title, image, price, category, stock, rate } = props;
 
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
            
              <Col className="rating">
                {[...Array(rate)].map((star) => {
                  return (
                    <label>
                      {" "}
                      <BsStarFill></BsStarFill>
                    </label>
                  );
                })}
                   {[...Array( 5 - rate)].map((star) => {
                  return (
                    <label>
                      {" "}
                      <BsStar></BsStar>
                    </label>
                  );
                })}
                
              </Col>
            </Row>
              <Row>
                <Col>
                  <span>Categoria: {category}</span>
                </Col>
              </Row>
          
            <Col>
              <span>6 Cuotas s/interés</span>
            </Col>
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
              <ItemCount stock={stock}></ItemCount>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
