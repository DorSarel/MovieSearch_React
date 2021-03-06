import React from 'react';

import Spinner from '../../component/UI/Spinner/Spinner';

import Icons from '../../assets/img/sprite.svg';
import './Bookmark.css';

const bookmark = ( props ) => {

    let noLikedMovies = (
        <h1 style={{textAlign: 'center'}}>No liked movies yet..</h1>
    );
    let likedMovies = null;
    if (props.likedMovies.length > 0) {
        noLikedMovies = null;
        likedMovies = props.likedMovies.map(movie => {
            return (
                <li className="bookmark__item">
                    <div className="bookmark__details">
                        <h2 className="bookmark__title">{movie.Title}</h2>
                        <button 
                            className="bookmark__btn"
                            onClick={ (e) => props.clicked(movie, e) }>
                            <svg className="bookmark__icon">
                                <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                            </svg>
                        </button>
                    </div>
                    <img src={movie.Poster} alt={movie.Title} className="bookmark__photo" />
                </li>
            );
        })
    }

    return (
        <div className="bookmark">
            {noLikedMovies}
            <ul className="bookmark__list">
                {likedMovies}
            </ul>
        </div>
    )
}
export default bookmark;