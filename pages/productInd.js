import React from 'react';
import Header from'../components/Header/Header.jsx'
import Navegation from'../components/Navegation/Navegation.jsx'
import Footer from'../components/Footer/Footer.jsx'
import ProOne from '../components/ProOne/ProOne.jsx'



const products = () => {
    return (
        <div>
            <Header/>
            <Navegation/>
            <ProOne/>
            
            <Footer/>
        </div>
    );
  };
  
  export default products;