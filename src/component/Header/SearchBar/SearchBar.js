import React from 'react';

import './SearchBar.css';
import Icons from '../../../assets/img/sprite.svg';

const searchBar = ( props ) => (
    <form action="#" className="search">
        <input type="text" className="search__input" placeholder="Search movie"/>
        <button className="search__btn">
            <svg className="search__icon">
                <use xlinkHref={`${Icons}#icon-magnifying-glass`}></use>
            </svg>
        </button>
    </form>
)

export default searchBar;