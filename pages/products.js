import React from 'react';
import Header from'../components/Header/Header.jsx'
import Navegation from'../components/Navegation/Navegation.jsx'
import Filter from'../components/Filter/Filter.jsx'
import Footer from'../components/Footer/Footer.jsx'
import Carta from '../components/Carta/Carta.jsx'
import ButtonEdit from '../components/ButtonEdit/ButtonEdit.jsx'



const products = () => {
    return (
        <div>
            <Header/>
            <Navegation/>
            <Filter/>
            <Carta/>
            <ButtonEdit/>
            <Footer/>
        </div>
    );
  };
  
  export default products;