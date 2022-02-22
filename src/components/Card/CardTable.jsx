import React from 'react';
import style from './CardTable.css';
import CardItem from "./CardItem";

function CardTable({ items }) {
    return (
        <div className='cardTable'>
            {items.map(({ Title, Year, imdbID, Type, Poster }) => (
                <CardItem title={Title} year={Year} id={imdbID}  key={imdbID} poster={Poster} type={Type} />
            ))}
        </div>
    );
}

export default CardTable;