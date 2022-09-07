import React from 'react';

const DetailCompanies = ({ item }) => {
  return (
    <section className="detail__content__companies">
      <h1>production companies</h1>
      <ul>
        {item &&
          item.map((item) => (
            <li key={item.id}>
              <img src={item.logo} alt="" title={item.name} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default DetailCompanies;
