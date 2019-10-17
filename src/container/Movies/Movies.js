import React, { Component } from 'react';

import './Movies.css';
import picture from '../../assets/img/hp.jpg';

class Movies extends Component {

    render() {
        return (
            <main className="movies">
                <figure className="movie-box">
                    <img src={picture} alt="Poster" className="movie-box__poster" />
                    <div className="movie-box__detail">
                        <h3 className="movie-box__title">Harry Potter</h3>
                        <figcaption className="movie-box__plot">Bla BLa</figcaption>
                        <button className="movie-box__btn">Read More</button>
                    </div>
                </figure>

                <figure className="movie-box">
                    <img src={picture} alt="Poster" className="movie-box__poster" />
                    <div className="movie-box__detail">
                        <h3 className="movie-box__title">Harry Potter</h3>
                        <figcaption className="movie-box__plot">Bla BLa</figcaption>
                        <button className="movie-box__btn">Read More</button>
                    </div>
                </figure>

                <figure className="movie-box">
                    <img src={picture} alt="Poster" className="movie-box__poster" />
                    <div className="movie-box__detail">
                        <h3 className="movie-box__title">Harry Potter</h3>
                        <figcaption className="movie-box__plot">Bla BLa</figcaption>
                        <button className="movie-box__btn">Read More</button>
                    </div>
                </figure>

                <figure className="movie-box">
                    <img src={picture} alt="Poster" className="movie-box__poster" />
                    <div className="movie-box__detail">
                        <h3 className="movie-box__title">Harry Potter</h3>
                        <figcaption className="movie-box__plot">Bla BLa</figcaption>
                        <button className="movie-box__btn">Read More</button>
                    </div>
                </figure>
            </main>
        )
    }
}

export default Movies;