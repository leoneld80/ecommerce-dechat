import React from "react";
import { Badge, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand ="md" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src="./img/logo.png"  style={{width:"200px"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/sale">
              <Badge bg="danger">Ofertas</Badge>
              </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/star-wars">
                Star Wars
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/marvel">
                Marvel
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/dc">
                DC
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/series-tv">
                Series-Tv
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/dragon-ball">
                Dragon Ball
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/disney">
                Disney
              </NavDropdown.Item>
            </NavDropdown>
            
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form> */}
          </Nav>
        </Navbar.Collapse>
        <CartWidget></CartWidget>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
