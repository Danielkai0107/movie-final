import React from 'react';

const DetailStory = ({ item }) => {
  return (
    <section className="detail__content__story">
      <h1>Story Line</h1>
      <p>{item.overview}</p>
    </section>
  );
};

export default DetailStory;
