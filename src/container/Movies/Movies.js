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
        movie = (
            <React.Fragment>
                <img src={props.movie.Poster} alt={props.movie.Title} className="movie__photo" />
                <div className="movie__main">
                    <h2 className="movie__title">{props.movie.Title}</h2>
                    <div className="movie__details">
                        <p>Released: {props.movie.Released}</p>
                        <p>Actors: {props.movie.Actors}</p>
                        <p>Plot: {props.movie.Plot}</p>
                        <p>BoxOffice: {props.movie.BoxOffice}</p>
                    </div>
                </div>
                <p className="movie__rating">{props.movie.imdbRating}</p>
                <button className="movie__btn" onClick={props.bookmark}>
                    <svg className="movie__icon">
                        <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                    </svg>
                </button>
            </React.Fragment>   
        )
    }

    return (
        <main className="movie">
          {/* {movie}   */}
          <img src="https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg" alt="Pokémon Detective Pikachu" className="movie__photo" />
            <div className="movie__main">
                <h1 className="movie__title">Pokémon Detective Pikachu</h1>
                <div className="movie__details">
                    <p><span className="movie__details__title">Released</span>: 10 May 2019</p>
                    <p>Actors: Ryan Reynolds, Justice Smith, Kathryn Newton, Bill Nighy</p>
                    <p>Plot: In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.</p>
                    <p>BoxOffice: N/A</p>
                </div>
            </div>
            <p className="movie__rating">6.7</p>
                <button className="movie__btn" onClick={props.bookmark}>
                    <svg className="movie__icon">
                        <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                    </svg>
                </button>
        </main>
    )
}

export default movies;