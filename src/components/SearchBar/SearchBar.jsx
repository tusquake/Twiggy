import React from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearchChange, placeholder }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={handleSearchChange}
        />
    );
};

export default SearchBar;
