import React from 'react';
import './ProOne.css'; // Import your CSS file
import bs1 from './bs1.jpg';
import cart from './shopping-cart_icon-icons.com_72552.svg';
import { Link } from 'react-router-dom';

const ProOne = () => {
  return (
    <div>
      <div className="productimage">
        <img src={bs1} alt="Product" />
      </div>
      <div className="other">
        <div className="info">
          <h2>Nombre de producto</h2>
          <h4>Descripción:</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque illo soluta, saepe doloremque minima hic
            assumenda tempora eum iure quidem facere? Atque ducimus dolorum blanditiis exercitationem sapiente officia
            culpa aliquam.
          </p>
          <div className="Tallas">
            <div id="one">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  XS
                </label>
              </div>
            </div>
            <div id="two">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  S
                </label>
              </div>
            </div>
            <div id="three">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  M
                </label>
              </div>
            </div>
            <div id="four">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  L
                </label>
              </div>
            </div>
            <div id="five">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  XL
                </label>
              </div>
            </div>
          </div>
          <div id="final">
            <h4>Precio: $$$$</h4>
            <img src={cart} alt="Shopping Cart" />
            <div id="edit">
              <Link to = '/editpro'>
              <button type="button" className="btn" style={{ backgroundColor: '#FEF5EF' }}>
                Editar
              </button>
              </Link>
            </div>
          </div>
          <p> Categorías que apliquen</p>
        </div>
        <div className="comments">
          <h4>Comentarios sobre este producto</h4>
          <div className="input-group mb-3">
            <div className="textss">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae exercitationem autem
                assumenda voluptas possimus tempora omnis id fugiat eius repellendus, tempore et dolores, itaque dolorum
                eligendi maiores voluptates esse?
              </p>
            </div>
            <span
              className="input-group-text"
              id="inputGroup-sizing-default"
              style={{ backgroundColor: '#FEF5EF' }}
            >
              Comment
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProOne;


