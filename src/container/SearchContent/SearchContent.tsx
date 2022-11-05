import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';
import { SearchBar } from '../../components';
import { getUsers } from '../../store/actions';
import { AppThunkDispatch } from '../../store/storeConfig';

const SearchContent = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const [search, setSearch] = useState('');

  useDebounce(
    () => {
      dispatch(getUsers(search.toLocaleLowerCase()));
    },
    400,
    [search]
  );

  return (
    <>
      <SearchBar setSearch={setSearch}></SearchBar>
    </>
  );
};

export default SearchContent;
