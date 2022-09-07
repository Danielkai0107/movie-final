import React from 'react';
import BtnSlider from '../Slider/BtnSlider';
import VerticalItem from './VerticalItem';

const VerticalList = ({ movie, title }) => {
  return (
    <article className="listContainer">
      <h1>{title}</h1>
      <ul>
        <BtnSlider show={5} SMshow={2} MDshow={5} SMscroll={2}>
          {movie.map((item) => (
            <VerticalItem item={item} key={item.id} />
          ))}
        </BtnSlider>
      </ul>
    </article>
  );
};

export default VerticalList;
