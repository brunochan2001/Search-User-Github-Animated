import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './style.css';

const SearchBar = () => {
  return (
    <div className="header-container">
      <div className="header-container__search">
        <SearchIcon sx={{ color: 'action.active' }} />
        <input
          className="header-container__search-input"
          placeholder="Searching user"
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
