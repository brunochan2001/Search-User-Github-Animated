import React, { Dispatch, SetStateAction } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { IconButton } from '@mui/material';
import './style.css';

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
  handleChangeTheme: () => void;
}

const SearchBar: React.FC<Props> = ({ setSearch, handleChangeTheme }) => {
  return (
    <div className="header-container">
      <div className="header-container__search">
        <SearchIcon />
        <input
          className="header-container__search-input"
          placeholder="Searching user"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="header-container__icon">
        <a href="https://github.com/brunochan2001">
          <IconButton color="inherit" size="small">
            <GitHubIcon />
          </IconButton>
        </a>
        <IconButton color="inherit" size="small" onClick={handleChangeTheme}>
          <WbSunnyIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
