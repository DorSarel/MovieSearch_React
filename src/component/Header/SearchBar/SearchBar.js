import React from 'react';

import PreviewBox from '../../UI/PreviewBox/PreviewBox';
import './SearchBar.css';
import Icons from '../../../assets/img/sprite.svg';

const searchBar = ( props ) => (
    <form onSubmit={props.submitted} action="#" className="search">
        <input
            type="text"
            className="search__input"
            placeholder="Search movie"
            value={props.title}
            onChange={props.changed}
            />
        <button className="search__btn">
            <svg className="search__icon">
                <use xlinkHref={`${Icons}#icon-magnifying-glass`}></use>
            </svg>
        </button>

        <PreviewBox 
            movies={props.movies}
            toggleBookmark={props.bookmarkHandler} />
    </form>
)

export default searchBar;