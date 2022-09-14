import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='col-md '  style={{background:"#f8f9fa"}} >
        {/* {background:"#f8f9fa"} */}
        <Row></Row>
        <Row className='mx-3 my-auto'>
            <Col>
            <Row>
            INSTAGRAM
            </Row>
            <Row>YOUTUBE</Row>
            <Row>FACEBOOK</Row>
            </Col>
            <Col>
            <Row>PREGUNTAS FREC.</Row>
            <Row>TÉRM & COND</Row>
            <Row>MIS PEDIDOS</Row>
            </Col>
            <Col>¿BUSCÁS OFERTAS?
            <Row>
            <input placeholder='ingresá tu eMail'></input>
            <Button variant="light" onClick={() => console.log("Light")}>
               Recibir Ofertas
            </Button>            

            </Row>
            </Col>
            </Row>
    </div>
  )
}

export default Footer