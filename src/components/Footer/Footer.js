import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css"


const Footer = () => {
  return (
    <div className="col-md footer" style={{ background: "#f8f9fa" }}>
      {/* {background:"#f8f9fa"} */}
      <Row></Row>
      <Row className="mx-5 my-5" style={{ fontSize: "small" }}>
        <Col>
          <Row>
            <Link to="#">
            <p><BsInstagram/> INSTAGRAM</p>
            </Link>
          </Row>
          <Row>
          <Link to="#">
            <p><BsYoutube/> YOUTUBE</p>
            </Link>
          </Row>
          <Row>
          <Link to="#">
            <p><BsFacebook/> FACEBOOK</p>
            </Link>
          </Row>
        </Col>
        <Col>
          <Row>
            <Link to="#">
              <p>PREGUNTAS FREC.</p>
            </Link>
          </Row>
          <Row>
          <Link to="#">
            <p>TÉRM & COND</p>
            </Link>
          </Row>
          <Row>
          <Link to="#">
            <p>MIS PEDIDOS</p>
            </Link>
          </Row>
        </Col>
        <Col>
          <p>¿BUSCÁS OFERTAS?</p>
          <Row>
            <input type={"email"} placeholder="ingresá tu eMail"></input>
            <Button variant="info" onClick={() => console.log("")}>
              Recibir Ofertas
            </Button>
            
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
