import React from 'react';

import style from './Search.css';

function SearchDescription({ searchQuery, getTotalResults }) {
    return (
        <div className='searchDescription'>
            {searchQuery ? (
                <p>
                {`You searched for: ${searchQuery}, `} {getTotalResults ? `${getTotalResults} results found` : 'nothing found'}
                </p>
            ) : (
                <p>try to search some movie</p>
            )}
        </div>
    );
}

export default SearchDescription;