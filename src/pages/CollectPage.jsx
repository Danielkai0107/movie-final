import React, { useContext } from 'react';
import CollectItem from '../components/Collect/CollectItem';
import { MovieContext } from '../func/context';
import Detail from './Detail';

const CollectPage = () => {
  const { collect, detailOpen, handleDeleteAllClick } =
    useContext(MovieContext);
  return (
    <main className="collect">
      <h1 className="collect__title">Collect</h1>
      <article className="collectContainer">
        <section className="secondTitle">
          <h1>
            {collect.length === 0 ? 'NO Collection' : 'Collections'}
            <span>({collect?.length})</span>
          </h1>
          {collect.length !== 0 && (
            <h2 onClick={handleDeleteAllClick}>
              <span></span>all
            </h2>
          )}
        </section>
        <ul className="collectList">
          {collect.map((item) => (
            <CollectItem item={item} key={item.id} />
          ))}
        </ul>
      </article>

      {detailOpen && <Detail />}
    </main>
  );
};

export default CollectPage;
