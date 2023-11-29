import React from 'react';
import bs1 from './bs1.jpg';
import bs2 from './bs2.jpg';
import bs3 from './bs3.jpg';
import bs4 from './bs4.jpg';
import Carousel from 'react-bootstrap/Carousel';


const Slides = () => {
  return (
    <Carousel fade>
        <Carousel.Item>
            <img className='d-block w-100' src={bs1} />
        </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={bs2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={bs3}  />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={bs4} />
      </Carousel.Item>
    </Carousel>
    );
};

export default Slides;