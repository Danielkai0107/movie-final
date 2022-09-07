import React, { useContext } from 'react';
import { MovieContext } from '../../func/context';

const CollectItem = ({ item }) => {
  const { handleDetailOpen, handleDeleteCollectClick } =
    useContext(MovieContext);
  return (
    <li className="collectItem">
      <figure
        className="collectItem__poster"
        onClick={() => {
          handleDetailOpen(item?.id);
        }}
      >
        <img src={item?.poster} alt="" />
      </figure>
      <p className="collectItem__title">{item?.name}</p>
      <p className="collectItem__date">{item?.date}</p>
      <span
        className="collectRemove"
        onClick={() => {
          handleDeleteCollectClick(item.id);
        }}
      ></span>
    </li>
  );
};

export default CollectItem;
