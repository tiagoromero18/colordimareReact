import React from 'react';
import './Nav.css'; // Import your CSS file
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container-fluid" >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="./home">Inicio</Link>
                </li>
                <li class="nav-item">
                <Link to="./aboutus" class="nav-link">Sobre Nosotros</Link>
                </li>
                <li class="nav-item">
                <Link to="./products" class="nav-link">Productos</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    );
};

export default Nav;