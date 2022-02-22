import React from 'react';
import placeholder from '../img/placeholder-image.png'
import style from './CardItem.css';

function addPlaceholder(e) {
    e.target.src = placeholder;
}

function CardItem({ poster, title, year, id, type }) {

    return (
        <div className='card'>
            <img className='cardImage' src={poster} onError={addPlaceholder} alt="poster" />
            <ul className='cardDescription'>
                <li><p>Name: {title}</p></li>
                <li><p>Year: {year}</p></li>
                <li><p>imdbID: {id}</p></li>
                <li><p>Type: {type}</p></li>
            </ul>
        </div>
    );
}

export default CardItem;