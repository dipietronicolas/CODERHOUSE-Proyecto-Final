import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarRB.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const NavBarRB = () => {

  return (
    <Navbar
      collapseOnSelect expand="md"
      variant="dark"
      className="d-flex justify-content-around p-1">
      <Navbar.Brand
        href="/">
        La Tienda Virtual
      </Navbar.Brand>
      {/*<Nav className="mr-auto">*/}
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Vehiculos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Inmuebles</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Tecnologia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Hogar y Muebles</NavDropdown.Item>
      </NavDropdown>
      {/*</Nav>*/}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Ingresar</Nav.Link>
          <Nav.Link href="#">Registrarse</Nav.Link>
          <CartWidget />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}






