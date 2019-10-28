import React from 'react';

import PreviewBox from '../../UI/PreviewBox/PreviewBox';
import './SearchBar.css';
import Icons from '../../../assets/img/sprite.svg';

const searchBar = ( props ) => (
    <div className="searchBar">
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
                selectMovie={props.selectMovie} />
        </form>
        <p className="searchBar__error">
            {props.error ? props.error : null}
        </p>
    </div>
)

export default searchBar;