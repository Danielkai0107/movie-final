import React from 'react';
import BtnSlider from '../Slider/BtnSlider';
import SimilarItem from './SimilarItem';

const SimilarList = ({ movie, title }) => {
  return (
    <article className="similarListContainer">
      <h1>{title}</h1>
      <ul>
        <BtnSlider show={3.7} SMshow={1} MDshow={3} SMscroll={1}>
          {movie.map((item) => (
            <SimilarItem item={item} key={item.id} />
          ))}
        </BtnSlider>
      </ul>
    </article>
  );
};

export default SimilarList;
