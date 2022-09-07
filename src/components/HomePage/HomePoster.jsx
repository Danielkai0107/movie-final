import React from 'react';
import AutoSlider from '../Slider/AutoSlider';
import HomePosterItem from './HomePosterItem';
const HomePoster = ({ movie }) => {
  return (
    <article className="homePosterContainer">
      <AutoSlider>
        {movie.map((item) => (
          <HomePosterItem item={item} key={item.id} />
        ))}
      </AutoSlider>
    </article>
  );
};

export default HomePoster;
