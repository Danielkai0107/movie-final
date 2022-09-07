import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import { MovieContext } from '../../func/context';

const Search = styled('div')(({ theme }) => ({
  borderRadius: 20,
  border: '1px solid #fff',
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  height: '2.2rem',
  '& .MuiInputBase-input': {
    padding: '0 0 0 1.5rem',
    color: '#fff',
    fontSize: '.9rem',
    fontWeight: '200',
    letterSpacing: '2px',
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '22ch',
      },
    },
    //placeholder
    '&::placeholder': {
      fontSize: '.9rem',
      fontWeight: '200',
      letterSpacing: '2px',
    },
  },
}));

const SearchBox = ({ handleSearchKeyDown }) => {
  const { searchInput, setSearchInput } = useContext(MovieContext);
  return (
    <Search>
      <StyledInputBase
        placeholder="Search..."
        value={searchInput}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onKeyDown={handleSearchKeyDown}
      />
    </Search>
  );
};

export default SearchBox;
