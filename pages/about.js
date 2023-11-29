import React from 'react';
import Header from'../components/Header/Header.jsx'
import Slides from '../components/Slides/Slides.jsx'
import Footer from'../components/Footer/Footer.jsx'
import Navegation from'../components/Navegation/Navegation.jsx'


const home = () => {
    return (
        <div>
            <Header/>
            <Navegation/>
            <Slides/>
            <Footer/>
        </div>
    );
  };
  
  export default home;