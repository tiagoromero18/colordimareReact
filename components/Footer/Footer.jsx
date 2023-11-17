import React from 'react';
import './Footer.css'; // Import your CSS file
import logor from './Logo_circular.png';

const Footer= () => {
  return (
    <footer>
        <div class="contact">
            <h3>Contact Us</h3>
                <div class="c1">
                    <i class="fa-solid fa-phone"></i>
                    <p>phone number</p>
                </div>
                <div class="c1">
                    <i class="fa-solid fa-envelope"></i>
                    <p>mail address</p>
                </div>
                <div class="c1">
                    <i class="fa-brands fa-square-instagram"></i>
                    <p>instagram</p>
                </div>
        </div>
        <div class="Alliance">
            <h3>Alliance</h3>
            <div class="c1">
                <i class="fa-brands fa-dev" ></i>
                <p>Dev Team</p>
            </div>
            <div class="c1">
                <i class="fa-solid fa-store" ></i>
                <p>Phisical store</p>
            </div>
        </div>
        <div class="lo">
            <img src={logor} alt="Bottom Logo"></img>
        </div>
    </footer>  
    );
};

export default Footer;