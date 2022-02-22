import React from 'react';
import userIcon from '../img/user (2).png';
import USERNAME from '../../constants/user';
import hideIcon from '../img/down-filled-triangular-arrow.png';

import style from './User.css';

function User() {
    return (
        <div className='user'>
            <img className='user-item__icon' src={userIcon} alt="user icon" />
            <p>{USERNAME}</p>
            <img className='user-hide__icon' src={hideIcon} alt="icon hide user" />
        </div>
    );
}

export default User;