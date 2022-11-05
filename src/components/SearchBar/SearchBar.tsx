import React, { Dispatch, SetStateAction } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './style.css';

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ setSearch }) => {
  return (
    <div className="header-container">
      <div className="header-container__search">
        <SearchIcon sx={{ color: 'action.active' }} />
        <input
          className="header-container__search-input"
          placeholder="Searching user"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="header-container__icon">
        <a href="https://github.com/brunochan2001">
          <GitHubIcon />
        </a>
        <WbSunnyIcon />
      </div>
    </div>
  );
};

export default SearchBar;
