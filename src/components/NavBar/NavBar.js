import React from "react";
import { Button, Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand ="md" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="./img/logo.png"  style={{width:"200px"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Categoria 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Categoria 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Categoria 3
              </NavDropdown.Item>
            </NavDropdown>
            
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          </Nav>
        <CartWidget></CartWidget>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
