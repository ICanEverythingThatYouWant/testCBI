import React from "react";
import style from './Header.css';
import Search from '../Search/Seacrh'
import User from '../User/User'

function Header({ QueryChange }){
    return(
        <div className='header'>
            <h1 className='logo'>Movie Catalog</h1>
            <Search onQueryChange={QueryChange} />
            <User/>
        </div>
    );
}

export default Header;