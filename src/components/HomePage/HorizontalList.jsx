import React from 'react';
import BtnSlider from '../Slider/BtnSlider';
import HorizontalItem from './HorizontalItem';

const HorizontalList = ({ movie, title }) => {
  return (
    <article className="listContainer">
      <h1>{title}</h1>
      <ul>
        <BtnSlider show={3.7} SMshow={1} MDshow={3} SMscroll={1}>
          {movie.map((item) => (
            <HorizontalItem item={item} key={item.id} />
          ))}
        </BtnSlider>
      </ul>
    </article>
  );
};

export default HorizontalList;
