import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonEdit.css';

const EditButton = ({ to, text }) => {
  return (
    <Link to="/addNewProduct">
      <div id = 'b'>
        <button className="btn" type="button" style={{ backgroundColor: '#FEF5EF' }}>
            Agregar Producto
          </button>
      </div>
    </Link>
  );
};

export default EditButton;