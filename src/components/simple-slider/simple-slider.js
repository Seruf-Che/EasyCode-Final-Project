import React from "react";
import Slider from "react-slick";

import slide1 from "./images/1.jpg";
import slide2 from "./images/2.jpg";
import slide3 from "./images/3.jpg";
import slide4 from "./images/4.jpg";

const SimpleSlider = () => {
  const settings = {
          dots: true,
          infinite: true,
          fade: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 6000,
          slidesToShow: 0,
          slidesToScroll: 1,
          pauseOnHover: false,
          arrows: false,
          accessibility: false
        };
  
  return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <div className={"slide"} style={{"backgroundImage":`url(${slide1})`}}></div>
          </div>
          <div>
            <div className={"slide"} style={{"backgroundImage":`url(${slide2})`}}></div>
          </div>
          <div>
            <div className={"slide"} style={{"backgroundImage":`url(${slide3})`}}></div>
          </div>
          <div>
            <div className={"slide"} style={{"backgroundImage":`url(${slide4})`}}></div>
          </div>
        </Slider>
      </div>

  );
};

export default SimpleSlider;