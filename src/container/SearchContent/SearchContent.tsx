import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'react-use';
import { SearchBar } from '../../components';
import { getUsers } from '../../store/actions';
import { AppThunkDispatch } from '../../store/storeConfig';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchContent: React.FC<Props> = ({ setIsOpen }) => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [search]);

  useDebounce(
    () => {
      if (search.length) {
        dispatch(getUsers(search.toLocaleLowerCase()));
      }
    },
    100,
    [search]
  );

  return (
    <>
      <SearchBar setSearch={setSearch}></SearchBar>
    </>
  );
};

export default SearchContent;
