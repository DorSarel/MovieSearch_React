import React from 'react';

import './Movie.css';
import Icons from '../../assets/img/sprite.svg';

const movie = ( props ) => {

    return (
        <li className="movie-box">
            <img src={props.poster} alt={props.title} className="movie-box__poster" />
            <div className="movie-box__detail">
                <h3 className="movie-box__title">{props.title}</h3>
                <figcaption className="movie-box__year">{props.year}</figcaption>
            </div>
            <button className="movie-box__btn" onClick={props.bookmark}>
                <svg className="movie-box__icon">
                    <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                </svg>
            </button>
        </li>
    );
}
export default movie;