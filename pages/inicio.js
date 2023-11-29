import React from 'react';
import InicioHeader from'../components/InicioHeader/Header.jsx'
import InicioSlides from '../components/InicioSlides/Slides.jsx'
import InicioFooter from'../components/InicioFooter/Footer.jsx'
import InicioNavegation from'../components/InicioNavegation/Navegation.jsx'


const home = () => {
    return (
        <div>
            <InicioHeader/>
            <InicioNavegation/>
            <InicioSlides/>
            <InicioFooter/>
        </div>
    );
  };
  
  export default home;