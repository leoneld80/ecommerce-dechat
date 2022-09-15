import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="col-md " style={{ background: "#f8f9fa" }}>
      {/* {background:"#f8f9fa"} */}
      <Row></Row>
      <Row className="mx-5 my-5" style={{ fontSize: "small" }}>
        <Col>
          <Row>
            <p>INSTAGRAM</p>
          </Row>
          <Row>
            <p>YOUTUBE</p>
          </Row>
          <Row>
            <p>FACEBOOK</p>
          </Row>
        </Col>
        <Col>
          <Row>
            <p>PREGUNTAS FREC.</p>
          </Row>
          <Row>
            <p>TÉRM & COND</p>
          </Row>
          <Row>
            <p>MIS PEDIDOS</p>
          </Row>
        </Col>
        <Col>
          <p>¿BUSCÁS OFERTAS?</p>
          <Row>
            <input placeholder="ingresá tu eMail"></input>
            <Button variant="info" onClick={() => console.log("Light")}>
              Recibir Ofertas
            </Button>
            
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
