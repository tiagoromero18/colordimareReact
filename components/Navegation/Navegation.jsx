import React from 'react';
import './Navegation.css'; // Import your CSS file
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegation = () => {
  return (
    <Navbar expand="lg" className="bg-myColor bg-body-tertiary">
    <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Inicio</Nav.Link>
          <Nav.Link href="/aboutus">Sobre Nosotros</Nav.Link>
          <Nav.Link href="/products">Productos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    );
};

export default Navegation;