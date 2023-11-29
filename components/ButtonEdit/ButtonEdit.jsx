import React from 'react';
import { Link } from 'react-router-dom';

const EditButton = ({ to, text }) => {
  return (
    <Link to="/addNewProduct">
      <button className="btn" type="button" style={{ backgroundColor: '#FEF5EF' }}>
            Agregar Producto
          </button>
    </Link>
  );
};

export default EditButton;