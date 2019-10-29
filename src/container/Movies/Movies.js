import React from 'react';
import Spinner from '../../component/UI/Spinner/Spinner';

import './Movies.css';
import Icons from '../../assets/img/sprite.svg'

const movies = ( props ) => {

    let movie = null;
    if (props.shouldLoad) {
        movie = <Spinner />;
    }
    
    if (props.movie) {
        const iconClasses = props.movie.isBookmark ? ["movie__icon", "movie__icon--active"] : ["movie__icon"];
        movie = (
            <React.Fragment>
                <img src={props.movie.Poster} alt={props.movie.Title} className="movie__photo" />
                <div className="movie__main">
                    <h2 className="movie__title">{props.movie.Title}</h2>
                    <div className="movie__details">
                        <p><span className="movie__details__title">Released:</span> {props.movie.Released}</p>
                        <p><span className="movie__details__title">Actors:</span> {props.movie.Actors}</p>
                        <p><span className="movie__details__title">Plot:</span> {props.movie.Plot}</p>
                        <p><span className="movie__details__title">BoxOffice:</span> {props.movie.BoxOffice}</p>
                    </div>
                </div>
                <p className="movie__rating">{props.movie.imdbRating}</p>
                <button className="movie__btn" onClick={props.bookmarkHandler}>
                    <svg className={iconClasses.join(' ')}>
                        <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                    </svg>
                </button>
            </React.Fragment>   
        )
    }

    return (
        <main className="movie" onClick={props.clickHandler}>
          {movie}
        </main>
    )
}

export default movies;