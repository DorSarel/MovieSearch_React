import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import './Header.css';
import Icons from '../../assets/img/sprite.svg';

const header = ( props ) => (
    <header className="header">
        <Link to="/">
            <h1 className="header__title">Movie Search</h1>
        </Link>

        <SearchBar 
            title={props.title}
            movies={props.movies}
            error={props.error}
            changed={(e) => props.inputChangeHandler(e)}
            submitted={(e) => props.formSubmitHandler(e)}
            selectMovie={props.movieSelectHandler} />

        <nav className="user-nav">
            <Link to="/bookmarks">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${Icons}#icon-bookmark`}>
                        </use>
                    </svg>
                </div>
            </Link>
        </nav>
    </header> 
)
export default header;