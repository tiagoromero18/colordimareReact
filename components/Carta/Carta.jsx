import React from 'react';
import Card from 'react-bootstrap/Card';
import bs1 from './bs1.jpg';
import bs2 from './bs2.jpg';
import bs3 from './bs3.jpg';
import { Link } from 'react-router-dom';
import './Carta.css'; // Import your CSS file

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
            <Link to="/productInd" className="btn btn-primary">
              Más información
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
            <Link to="/productInd" className="btn btn-primary">
              Más información
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
            <Link to="/productInd" className="btn btn-primary">
              Más información
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Carta;
