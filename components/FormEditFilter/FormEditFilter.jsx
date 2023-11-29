import React from 'react';
import './FormEditFilter.css';
import logo from './Montserrat-2.png';


const FormEditFilter = () => {
  
    return (
      <div className="login-container2">
        <div className="logo2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          <form action="./products">
            <h4>Nuevo talla</h4>
            <input type="text" id="username" name="nombre" />
            <h4>Nueva color</h4>
            <input type="text" id="username" name="mail" />
            <h4> Nuevo tipo de producto</h4>
            <input type="number" id="password" name="password" />            
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
  };
  
export default FormEditFilter;