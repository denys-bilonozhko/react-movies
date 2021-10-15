import React from 'react';
import { useState } from 'react';

const Search = (props) => {
  const [search, setSearch] = useState('');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      props.searchMovie(search);
    }
  };

  return (
    <div className="container">
      <div className="search">
        <input
          className="validate"
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="waves-effect waves-light btn"
          onClick={() => props.searchMovie(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
