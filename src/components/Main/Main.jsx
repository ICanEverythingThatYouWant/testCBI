import React, { useEffect, useState } from 'react';
import CardTable from '../Card/CardTable';
import SearchDescription from '../Search/SearchDescription';

import API_URL from '../../constants/api';

import style from './Main.css';
import Pagination from '../Pagination/Pagination';

function Main({ queryMovie }) {
    const [pageCount, setPageCount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [TotalPages, setTotalPages] = useState(0);
    const [items, setItems] = useState([]);

    const fetchData = () => {
        setIsLoading(true);

        fetch(`${API_URL}&s=${queryMovie}&page=${pageCount}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.Search) {
                    setTotalPages(data.totalResults);
                    setItems(data.Search);
                }
            })
            .finally(() =>
                setIsLoading(false));
    };

    useEffect(() => {
        setItems([]);
        setTotalPages(0);

        if (queryMovie) {
            fetchData();
        }
    }, [queryMovie, pageCount]);

    useEffect(() => setPageCount(1), [queryMovie]);

    return (
        <main className='main'>
            <SearchDescription searchQuery={queryMovie} getTotalResults={TotalPages} />
            {isLoading ? <h1>Loading</h1> : <CardTable items={items} />}
            {TotalPages ? (
                <Pagination currentPageChange={setPageCount} perPage={10} totalPage={TotalPages} page={pageCount}/>
            ) : null}
        </main>
    );
}

export default Main;