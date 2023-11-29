import React, { useState } from 'react';
import './Header.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import logo from './Montserrat-2.png';
import cart from './shopping-cart_icon-icons.com_72552.svg';
import account from './round-account-button-with-user-inside_icon-icons.com_72596.svg';
import { Offcanvas } from 'react-bootstrap'; // Import Offcanvas from react-bootstrap
import Button from 'react-bootstrap/Button';
import bs1 from './bs1.jpg';

const Header = () => {
  const [showShop, setShowShop] = useState(false);

  const handleShopShow = () => setShowShop(true);
  const handleShopClose = () => setShowShop(false);

  return (
    <div className="header">
      <div className="l">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <h1> COLOR DI MARE </h1>
      <div className="r">
        {/* Use a button to trigger the Offcanvas */}
        <Link to="/login" target="_self">
          <img className="buttons" src={cart} alt="cart" />
        </Link>
        <Link to="/login" target="_self">
          <img className="buttons" src={account} alt="account" />
        </Link>
      </div>

      <Offcanvas show={showShop} onHide={handleShopClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

        <div className="shopcartin">
            <img src={bs1} alt="Product Image" />
            <h1>Producto</h1>
            <h2>Descripción</h2>
            <ul>
              <li>talla</li>
              <li>color</li>
            </ul>
            <p>Precio: $$$</p>
          </div>
          <h4>Total de la compra: $$$</h4>
          <Link to="/home" target="_self" className="btn btn-info" role="button" style={{ backgroundColor: '#FEF5EF' }}>
            Confirmar Compra
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;


