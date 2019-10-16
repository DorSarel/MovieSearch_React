import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import './Header.css';
import Icons from '../../assets/img/sprite.svg';

const header = ( props ) => (
    <header className="header">
        <h1 className="header__title">Movie Search</h1>

        <SearchBar />
        
        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                </svg>
            </div>
        </nav>
    </header> 
)
export default header;