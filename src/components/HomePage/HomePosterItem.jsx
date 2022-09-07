import React, { useContext } from 'react';
import ReactStars from 'react-rating-stars-component';
import { MovieContext } from '../../func/context';

const HomePosterItem = ({ item }) => {
  const { handleDetailOpen } = useContext(MovieContext);

  return (
    <section className="homePoster">
      <figure className="mainIMG">
        <img src={item?.image} alt="" />
        <div className="mask"></div>
      </figure>
      <div className="intro introContainer">
        <section className="intro__content">
          <h1>{item?.name}</h1>
          <ul className="intro__content__detail">
            <li>
              <button
                className="btn"
                onClick={() => {
                  handleDetailOpen(item?.id);
                }}
              >
                <span className="playIcon"></span>
                <span className="btn__content">Watch</span>
              </button>
            </li>
            <li>
              <div className="rate">
                <h3>Rate : </h3>
                <ReactStars
                  count={5}
                  size={16}
                  isHalf={true}
                  edit={false}
                  value={item.vote_average / 2}
                  activeColor="#FEB705"
                />
                <h3>({item?.vote_average})</h3>
              </div>
              <h3>Date : {item?.date}</h3>
            </li>
          </ul>
          <p>{item?.overview}</p>
        </section>
        <ul className="intro__index">
          <li>
            <span></span>
            <p>INDEX</p>
          </li>
          <li>
            <h1>{item?.number}</h1>
          </li>
          <li>
            <p>MOVIE</p>
            <span></span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomePosterItem;
