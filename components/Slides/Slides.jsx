import React from 'react';
import '../Header/Header.css'; // Import your CSS file
import bs1 from './bs1.jpg';
import bs2 from './bs2.jpg';
import bs3 from './bs3.jpg';
import bs4 from './bs4.jpg';
import Carousel from 'bootstrap/Carousel';

const Slides = () => {
  return (
    <div>
    <Carousel>
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner" >
        <div class="carousel-item active" >
        <img src={bs1} class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item" >
        <img src={bs2}  class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item" >
        <img src={bs3}  class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item" >
        <img src={bs4}  class="d-block w-100" alt="..."></img>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    </Carousel>
    </div>
    );
};

export default Slides;