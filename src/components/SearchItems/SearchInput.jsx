import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import { MovieContext } from '../../func/context';

const StyledInputBase = styled('input')(({ theme }) => ({
  border: '1px solid #fff',
  backgroundColor: 'transparent',
  borderRadius: '1.6rem',
  height: '3rem',
  width: '100%',
  padding: '0 0 0 1.5rem',
  color: '#fff',
  fontSize: '1.8rem',
  fontWeight: '200',
  lineHeight: '3rem',
  letterSpacing: '2px',
  //placeholder
  '&::placeholder': {
    fontSize: '1.2rem',
    fontWeight: '200',
    letterSpacing: '2px',
  },
}));

const SearchInput = ({ handleSearchKeyDown }) => {
  const { searchInput, setSearchInput } = useContext(MovieContext);

  return (
    <>
      <StyledInputBase
        placeholder="Search..."
        value={searchInput}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onKeyDown={handleSearchKeyDown}
      />
    </>
  );
};

export default SearchInput;
