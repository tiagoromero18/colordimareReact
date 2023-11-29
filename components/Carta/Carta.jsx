import React from 'react';
import Card from 'react-bootstrap/Card';
import bs1 from './bs1.jpg';
import bs2 from './bs2.jpg';
import bs3 from './bs3.jpg';
import { Link } from 'react-router-dom';
import './Carta.css'; // Import your CSS file
import cart from './shopping-cart_icon-icons.com_72552.svg';

function Carta() {
  return (
    <div className="boxes3">
      <div className="box">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={bs1} />
          <Card.Body>
            <Card.Title>Producto 1</Card.Title>
            <Card.Text>
              <ul>
                <li>talla</li>
                <li>precio</li>
              </ul>
            </Card.Text>
            <Link to="/productInd" className="btn" style={{ backgroundColor: '#FEF5EF' }}>
              Más información
            </Link>
            <Link to="" className="btn" >
            <img src={cart} alt="shopping cart" style={{ width: '40px', marginRight: '5px' }}/>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="box">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={bs2} />
          <Card.Body>
            <Card.Title>Producto 2</Card.Title>
            <Card.Text>
              <ul>
                <li>talla</li>
                <li>precio</li>
              </ul>
            </Card.Text>
            <Link to="/productInd" className="btn" style={{ backgroundColor: '#FEF5EF' }}>
              Más información
            </Link>
            <Link to="" className="btn" >
            <img src={cart} alt="shopping cart" style={{ width: '40px', marginRight: '5px' }}/>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="box">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={bs3} />
          <Card.Body>
            <Card.Title>Producto 3</Card.Title>
            <Card.Text>
              <ul>
                <li>talla</li>
                <li>precio</li>
              </ul>
            </Card.Text>
            <Link to="/productInd" className="btn" style={{ backgroundColor: '#FEF5EF' }}>
              Más información
            </Link>
            <Link to="" className="btn" >
            <img src={cart} alt="shopping cart" style={{ width: '40px', marginRight: '5px' }}/>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Carta;
