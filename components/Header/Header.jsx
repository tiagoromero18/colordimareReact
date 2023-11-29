import React from 'react';
import './Header.css'; // Import your CSS file
import { Link } from "react-router-dom";
import logo from './Montserrat-2.png';
import cart from './shopping-cart_icon-icons.com_72552.svg';
import account from './round-account-button-with-user-inside_icon-icons.com_72596.svg';

const Header = () => {
  return (
    
    <div class="header">
        <div class="l">
            <img class="logo" src={logo} alt='logo'></img>
        </div>
        <h1> COLOR DI MARE </h1>
        <div class="r">
            <Link to="/shoppingcart" target="_self"><img class="buttons" src={cart} ></img></Link>
            <Link to="/admin" target="_self"><img class="buttons"src={account} ></img></Link>
        </div>
    </div>
    );
};

export default Header;
