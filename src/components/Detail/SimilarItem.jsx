import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../func/context';

const SimilarItem = ({ item }) => {
  const {
    handleSimilarClick,
    handleAddCollectClick,
    handleDeleteCollectClick,
    collect,
  } = useContext(MovieContext);
  const [addCollect, setAddCollect] = useState(false);

  function handleCollect(item) {
    setAddCollect(!addCollect);
    if (addCollect) {
      handleDeleteCollectClick(item.id);
    } else {
      handleAddCollectClick(item);
    }
  }

  useEffect(() => {
    const same = collect.find((i) => i.id === item.id);
    if (same) {
      setAddCollect(true);
    }
  }, []);

  return (
    <li className="similarItem">
      <figure className="similarItem__poster">
        <img
          src={item.image}
          alt=""
          onClick={() => {
            handleSimilarClick(item.id);
          }}
        />
        <span
          className={addCollect ? 'collectTrue' : 'collectFalse'}
          onClick={() => {
            handleCollect(item);
          }}
        ></span>
      </figure>
      <p className="similarItem__title">{item.name}</p>
      <p className="similarItem__date">{item.date}</p>
    </li>
  );
};

export default SimilarItem;
