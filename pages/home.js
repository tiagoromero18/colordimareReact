import React from 'react';
import Header from'../components/Header/Header.jsx'
import Slides from '../components/Slides/Slides.jsx'
import Footer from'../components/Footer/Footer.jsx'
import Nav from'../components/Nav/Nav.jsx'


const home = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <Slides/>
            <Footer/>
        </div>
    );
  };
  
  export default home;