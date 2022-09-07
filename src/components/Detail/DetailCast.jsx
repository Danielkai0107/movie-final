import React from 'react';

const DetailCast = ({ item }) => {
  return (
    <section className="detail__content__cast">
      <h1>The Cast</h1>
      <ul>
        {item &&
          item.map((item) => (
            <li key={item.id}>
              <img src={item.profile} alt="" title={item.name} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default DetailCast;
