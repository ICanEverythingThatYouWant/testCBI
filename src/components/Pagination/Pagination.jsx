import React from 'react';
import { useEffect, useState } from 'react';

import getPagesArray from "../../utils/Pagination";
import MAX_PAGES_IN_PAGINATION from '../../constants/pagination';

import style from './Pagination.css';

function Pagination({ currentPageChange, totalPage, perPage, page }) {
    const [currentPage, setCurrentPage] = useState(page);
    const totalPages = Math.ceil(totalPage / perPage);

    useEffect(() => {
        currentPageChange(currentPage);
    }, [currentPage]);

    const nextPage = () => (currentPage >= totalPages ? totalPages : currentPage + 1);
    const earlyPage = () => (currentPage <= 1 ? 1 : currentPage - 1);

    return (
        <div className='pagination'>
            <button type="button" onClick={() => setCurrentPage(earlyPage)}>
                &lt;
            </button>
            {getPagesArray(currentPage, totalPages, MAX_PAGES_IN_PAGINATION).map((item) => (
                <button key={item} type="button" onClick={() => setCurrentPage(item)}>
                    {item}
                </button>
            ))}
            <button type="button" onClick={() => setCurrentPage(nextPage)}>
                &gt;
            </button>
        </div>
    );
}

export default Pagination;