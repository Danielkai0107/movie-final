import React from 'react';
import Slider from 'react-slick';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <ChevronLeftIcon
        sx={{
          width: '3rem',
          height: '3rem',
          color: 'white',
          position: 'absolute',
        }}
      />
    </div>
  );
}
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <ChevronRightIcon
        sx={{
          width: '3rem',
          height: '3rem',
          color: 'white',
          position: 'absolute',
        }}
      />
    </div>
  );
}

const BtnSlider = ({ children, show, SMshow, SMscroll, MDshow }) => {
  const settings = {
    infinite: true,
    slidesToShow: show,
    slidesToScroll: 3,
    speed: 400,
    adaptiveHeight: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: MDshow,
          slidesToScroll: MDshow,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: SMshow,
          slidesToScroll: SMscroll,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default BtnSlider;
