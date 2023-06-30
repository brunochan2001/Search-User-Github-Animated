import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch, RootState } from '../../store/storeConfig';
import { getUsers } from '../../store/actions';
import { useDebounce } from 'react-use';
import { SearchBar } from '../../components';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchContent: React.FC<Props> = ({ setIsOpen }) => {
  const { error } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppThunkDispatch>();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search && !error) {
      setIsOpen(true);
    } else if (!search || error) {
      setIsOpen(false);
    }
  }, [search, error]);

  useDebounce(
    () => {
      if (search.length) {
        dispatch(getUsers(search.toLocaleLowerCase()));
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
