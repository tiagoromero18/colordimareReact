import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import fil from './bxs-filter-alt.svg';
import { Link } from 'react-router-dom';



const Filter = () => {
  const [priceValue, setPriceValue] = useState(5);

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Filtros
        <img src={fil} alt="Bootstrap" width="30" height="24" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-filter" />
        <Navbar.Collapse id="navbar-filter">
          <Nav className="me-auto">
            <NavDropdown title="Tallas" id="nav-dropdown-tallas">
              <Form.Check type="checkbox" label="XS" id="check-xs" />
              <Form.Check type="checkbox" label="S" id="check-s" />
              <Form.Check type="checkbox" label="M" id="check-m" />
              <Form.Check type="checkbox" label="L" id="check-l" />
              <Form.Check type="checkbox" label="XL" id="check-xl" />
            </NavDropdown>
            <NavDropdown title="Colores" id="nav-dropdown-colores">
              <Form.Check type="checkbox" label="Blanco" id="check-blanco" />
              <Form.Check type="checkbox" label="Azul" id="check-azul" />
              <Form.Check type="checkbox" label="Naranja" id="check-naranja" />
              <Form.Check type="checkbox" label="Morado" id="check-morado" />
              <Form.Check type="checkbox" label="Rojo" id="check-rojo" />
            </NavDropdown>
            <NavDropdown title="Tipo de producto" id="nav-dropdown-tipoProducto">
              <Form.Check type="checkbox" label="Vestidos de baño" id="check-vestidos" />
              {/* Add more items for other types of products if needed */}
            </NavDropdown>
            <NavDropdown title="Precio" id="nav-dropdown-precio">
              <Form.Check
                type="checkbox"
                label={
                  <>
                    <Form.Label>Range</Form.Label>
                    <Form.Range
                      value={priceValue}
                      onChange={handlePriceChange}
                      min="1"
                      max="10"
                      step="0.5"
                    />
                    <span className="range-value">{priceValue}</span>
                  </>
                }
                id="check-precio"
              />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Link to="/editfilter">
            <button className="btn" type="button" style={{ backgroundColor: '#FEF5EF' }}>
              Editar
            </button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Filter;



