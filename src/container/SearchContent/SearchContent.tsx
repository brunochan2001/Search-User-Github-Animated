import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppThunkDispatch } from '../../store/storeConfig';
import { getUsers } from '../../store/actions';
import { useDebounce } from 'react-use';
import { SearchBar } from '../../components';
import { dismissUsersList } from '../../store/actions/userActions';

const SearchContent = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const [search, setSearch] = useState('');

  useDebounce(
    () => {
      if (search) {
        dispatch(getUsers(search.toLocaleLowerCase()));
      } else {
        dispatch(dismissUsersList());
      }
    },
    400,
    [search]
  );

  const handleChangeTheme = () => {
    const localTheme =
      localStorage.getItem('theme') == 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', localTheme);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <SearchBar setSearch={setSearch} handleChangeTheme={handleChangeTheme} />
  );
};

export default SearchContent;
