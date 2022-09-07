import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../func/context';

const VerticalItem = ({ item }) => {
  const {
    handleDetailOpen,
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
    <li className="verticalItem">
      <figure className="verticalItem__poster">
        <img
          src={item?.poster}
          alt=""
          onClick={() => {
            handleDetailOpen(item?.id);
          }}
        />
        <span
          className={addCollect ? 'collectTrue' : 'collectFalse'}
          onClick={() => {
            handleCollect(item);
          }}
        ></span>
      </figure>
      <p className="verticalItem__title">{item?.name}</p>
      <p className="verticalItem__date">{item?.date}</p>
    </li>
  );
};

export default VerticalItem;
