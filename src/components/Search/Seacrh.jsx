import React from 'react';
import style from './Search.css';


function Search({ onQueryChange }) {
    const handleChange = (e) => {
        return onQueryChange(e.target.value);
         }
    return (
        <div className='search'>
            <input placeholder="Search" onChange={handleChange} type="text" />
        </div>
    );
}

export default Search;