import React from 'react';
import Slider from 'react-slick';

const AutoSlider = ({ children }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default AutoSlider;
