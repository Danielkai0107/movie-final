import React, { useContext } from 'react';
import SearchItem from '../components/SearchPage/SearchItem';
import { MovieContext } from '../func/context';
import Detail from './Detail';

const SearchPage = () => {
  const { search, errorSearch, isSearchLoading, detailOpen } =
    useContext(MovieContext);
  return (
    <main className="search">
      <h1 className="search__title">Search</h1>
      {isSearchLoading ? (
        <article className="searchLoading">
          <span></span>
        </article>
      ) : (
        <article className="searchContainer">
          <h2>
            {errorSearch ? 'NO RESULT' : 'RESULTS'}
            <span className={isSearchLoading ? 'hidden' : ''}>
              ({search.length})
            </span>
          </h2>
          <ul className="searchResults">
            {search.map((item) => (
              <SearchItem item={item} key={item.id} />
            ))}
          </ul>
        </article>
      )}

      {detailOpen && <Detail />}
    </main>
  );
};

export default SearchPage;
