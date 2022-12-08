import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Components/Styles/Work.css'

const Works = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='WorkContainer'>
        <Slider className='work'{...settings}>
          <div className='firstSlider'></div>
          <div className='secondSlider'> </div>
        </Slider>
      </div>
  )
}

export default Works