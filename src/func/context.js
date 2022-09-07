import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiSearch } from '../func/WebAPI';
import { basicDataConvert } from './convert';
export const MovieContext = createContext({});

export function MovieProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [errorSearch, setErrorSearch] = useState(false);
  const [detailID, setDetailID] = useState('');
  const [detailOpen, setDetailOpen] = useState(false);
  const [collect, setCollect] = useState([]);
  const [login, setLogin] = useState(true);

  async function getSearch() {
    if (searchInput === '') return;
    setIsSearchLoading(true);
    try {
      const searchDate = (await apiSearch(searchInput)).data.results;
      searchDate.length === 0 ? setErrorSearch(true) : setErrorSearch(false);
      setSearch(basicDataConvert(searchDate));
      setSearchInput('');
      setIsSearchLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleDetailOpen(id) {
    setDetailOpen(!detailOpen);
    setDetailID(id);
  }

  function handleSimilarClick(id) {
    setDetailID(id);
  }

  function handleAddCollectClick(item) {
    setCollect([...collect, item]);
  }

  function handleDeleteCollectClick(id) {
    setCollect(collect.filter((item) => item.id !== id));
  }

  const handleDeleteAllClick = () => {
    setCollect([]);
  };

  return (
    <MovieContext.Provider
      value={{
        search,
        searchInput,
        errorSearch,
        isSearchLoading,
        detailID,
        detailOpen,
        collect,
        login,
        setSearchInput,
        setIsSearchLoading,
        getSearch,
        handleDetailOpen,
        setDetailOpen,
        handleSimilarClick,
        handleAddCollectClick,
        handleDeleteCollectClick,
        handleDeleteAllClick,
        setLogin,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
