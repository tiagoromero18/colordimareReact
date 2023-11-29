import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import fil from './bxs-filter-alt.svg';
import Form from 'react-bootstrap/Form';

const Filter = () => {
  const [priceValue, setPriceValue] = useState(5);
  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Filtros
          <img src={fil} alt="Bootstrap" width="30" height="24" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="tallasDropdown">
                  Tallas
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">XS</Dropdown.Item>
                  <Dropdown.Item href="#">S</Dropdown.Item>
                  <Dropdown.Item href="#">M</Dropdown.Item>
                  <Dropdown.Item href="#">L</Dropdown.Item>
                  <Dropdown.Item href="#">XL</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="coloresDropdown">
                  Colores
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Blanco</Dropdown.Item>
                  <Dropdown.Item href="#">Azul</Dropdown.Item>
                  <Dropdown.Item href="#">Naranja</Dropdown.Item>
                  <Dropdown.Item href="#">Morado</Dropdown.Item>
                  <Dropdown.Item href="#">Rojo</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="tipoProductoDropdown">
                  Tipo de producto
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Vestidos de baño</Dropdown.Item>
                  {/* Add more items for other types of products if needed */}
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="precioDropdown">
                  Precio
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Form.Label>Range</Form.Label>
                    <Form.Range
                      value={priceValue}
                      onChange={handlePriceChange}
                      min="1"
                      max="10"
                      step="0.5"
                    />
                    <span className="range-value">{priceValue}</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="btn" type="button" style={{ backgroundColor: '#FEF5EF' }}>
            Editar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Filter;

