import React from 'react';
import './Header/Header.css'; // Import your CSS file

const Filter = () => {
  return (
    <nav class="navbar" style="background-color: #FEF5EF;">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../index.html">Página de inicio</a>
            </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./aboutus.html">Sobre Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./products.html">Productos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
};

export default Filter;