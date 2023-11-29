import React from 'react';
import './FormNewPro.css'; // Import your CSS file

const FormNewPro = () => {
  return (
    <div className="form-new-pro-container">
    <div className="login-container">
      <div className="logo">
        <img src="../Assests/Img/Logo_circular.png" alt="Logo" />
      </div>
      <div className="login-form">
        <form action="olvidecontraseña2.html">
          <h4> Nombre del Usuario </h4>
          <input type="text" id="password" name="Usuario" />
          <h4> Descripción</h4>
          <input type="text" id="password" name="Email" />
          <h4>Tallas disponibles</h4>
          <div className="Tallas">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault1"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault1">
                XS
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                S
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault2"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault2">
                M
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault3"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault3">
                L
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault4"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault4">
                XL
              </label>
            </div>
          </div>
          <h4> # de prendas disponibles </h4>
          <input type="number" id="password" name="disponibles" />
          <h4>Precio</h4>
          <input type="number" id="password" name="precio" />
          <h4> Categorias </h4>
          <input type="text" id="password" name="categoria" />
          <h4> Imagen del producto </h4>
          <input type="file" id="password" name="foto" />

          <button type="submit"> Envia </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FormNewPro;

