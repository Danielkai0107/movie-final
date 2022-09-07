import ReactStars from 'react-rating-stars-component';
import React, { useState } from 'react';

const DetailMovie = ({ item }) => {
  const { genres } = item;
  return (
    <section className="detail__content__movie">
      <figure className="poster">
        <img src={item.poster} alt="" />
      </figure>
      <ul className="info">
        <li className="title">{item.title}</li>
        <li className="normal">Date : {item.date}</li>
        <li className="normal">
          <div className="rate">
            <h3>Rate :</h3>
            <ReactStars
              count={5}
              size={14}
              isHalf={true}
              edit={false}
              value={item.vote_average && item.vote_average / 2}
              activeColor="#FEB705"
            />

            <p>({item.vote_average})</p>
          </div>
        </li>
        <li className="genres">
          {genres &&
            genres.map((item) => (
              <p className="normal" key={item.id}>
                {item.name}
                <span>|</span>
              </p>
            ))}
        </li>
      </ul>
    </section>
  );
};

export default DetailMovie;
