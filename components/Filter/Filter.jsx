import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import fil from './bxs-filter-alt.svg';

const Filter = () => {
  const [priceValue, setPriceValue] = useState(5);

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Filtros <img src={fil} alt="Bootstrap" width="30" height="24" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-filter" />
        <Navbar.Collapse id="navbar-filter">
          <Nav className="me-auto">
            <NavDropdown title="Tallas" id="nav-dropdown-tallas">
              <NavDropdown.Item href="#">XS</NavDropdown.Item>
              <NavDropdown.Item href="#">S</NavDropdown.Item>
              <NavDropdown.Item href="#">M</NavDropdown.Item>
              <NavDropdown.Item href="#">L</NavDropdown.Item>
              <NavDropdown.Item href="#">XL</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Colores" id="nav-dropdown-colores">
              <NavDropdown.Item href="#">Blanco</NavDropdown.Item>
              <NavDropdown.Item href="#">Azul</NavDropdown.Item>
              <NavDropdown.Item href="#">Naranja</NavDropdown.Item>
              <NavDropdown.Item href="#">Morado</NavDropdown.Item>
              <NavDropdown.Item href="#">Rojo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Form.Control type="search" placeholder="Search" />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tipo de producto" id="nav-dropdown-tipoProducto">
              <NavDropdown.Item href="#">Vestidos de baño</NavDropdown.Item>
              {/* Add more items for other types of products if needed */}
            </NavDropdown>
            <NavDropdown title="Precio" id="nav-dropdown-precio">
              <NavDropdown.Item>
                <Form.Label>Range</Form.Label>
                <Form.Range
                  value={priceValue}
                  onChange={handlePriceChange}
                  min="1"
                  max="10"
                  step="0.5"
                />
                <span className="range-value">{priceValue}</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <button className="btn" type="button" style={{ backgroundColor: '#FEF5EF' }}>
              Editar
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Filter;


