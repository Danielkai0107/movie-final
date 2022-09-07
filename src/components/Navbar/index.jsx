import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import SearchBox from '../SearchItems/SearchBox';
import Burger from '../Burger';
import { MovieContext } from '../../func/context';

const Navbar = () => {
  const navigate = useNavigate();
  const { getSearch, collect, login, setLogin } = useContext(MovieContext);
  const handleSearchClick = () => {
    getSearch();
  };
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      getSearch();
      navigate('/search');
    }
  };

  const handleLogoutClick = () => {
    navigate('/login');
    setLogin(false);
  };

  return (
    <nav className="navbar">
      <ul className="logo">
        <RouterLink to="/">
          MOVIE<span>Finder</span>
        </RouterLink>
        <li className="logo__burger">
          <Burger />
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__search">
          <SearchBox handleSearchKeyDown={handleSearchKeyDown} />
          <IconButton
            aria-label="fetch movie"
            component={RouterLink}
            to="/search"
            onClick={handleSearchClick}
          >
            <SearchIcon
              sx={{
                color: 'white',
                width: 26,
                height: 26,
                marginLeft: '.5rem',
              }}
            />
          </IconButton>
        </li>
        <li className="menu__collect">
          <Link to="/collect">{collect.length !== 0 && <span></span>}</Link>
        </li>
        {login ? (
          <li className="menu__account ">
            <IconButton
              aria-label="account page"
              component={RouterLink}
              to="/account"
            >
              <Avatar
                src="/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
            </IconButton>
            <section className="accountGroup">
              <RouterLink to="/account">Daniel</RouterLink>
              <span>/</span>
              <RouterLink to="/login" onClick={handleLogoutClick}>
                登出
              </RouterLink>
            </section>
          </li>
        ) : (
          <li className="menu__account">
            <IconButton
              aria-label="account page"
              component={RouterLink}
              to="/sign"
            >
              <Avatar
                src="/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
            </IconButton>
            <section className="accountGroup">
              <RouterLink to="/login">登入</RouterLink>
              <span>/</span>
              <RouterLink to="/register">註冊</RouterLink>
            </section>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
