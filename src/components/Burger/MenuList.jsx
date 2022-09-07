import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SearchInput from '../SearchItems/SearchInput';
import LogoutIcon from '@mui/icons-material/Logout';
import { MovieContext } from '../../func/context';
import { Collections } from '@mui/icons-material';

const MenuList = ({ setMenuOpen }) => {
  const { getSearch, login, setLogin, collect } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleRouterBtn = (route) => () => {
    navigate(route);
    setMenuOpen(false);
  };
  const handleSearchClick = () => {
    navigate('/search');
    setMenuOpen(false);
    getSearch();
  };
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate('/search');
      getSearch();
    }
  };

  const handleLogoutClick = () => {
    navigate('/login');
    setMenuOpen(false);
    setLogin(false);
  };
  return (
    <ul className="drawer">
      <li className="drawer__search">
        <SearchInput handleSearchKeyDown={handleSearchKeyDown} />
        <IconButton aria-label="fetch movie" onClick={handleSearchClick}>
          <SearchIcon
            sx={{
              color: 'white',
              width: 30,
              height: 30,
              marginLeft: '.5rem',
            }}
          />
        </IconButton>
      </li>
      <li onClick={handleRouterBtn('/')}>home</li>
      <li onClick={handleRouterBtn('/collect')}>
        collect {collect.length !== 0 && <span>({collect?.length})</span>}
      </li>
      <li onClick={handleRouterBtn('/account')}>account</li>
      {login ? (
        <li onClick={handleLogoutClick}>
          log out
          <LogoutIcon
            sx={{
              color: 'white',
              width: 30,
              height: 30,
              marginRight: '.4rem',
              transform: 'translateY(3px)',
            }}
          />
        </li>
      ) : (
        <li onClick={handleRouterBtn('/login')}>login</li>
      )}
    </ul>
  );
};

export default MenuList;
