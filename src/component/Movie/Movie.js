import React from 'react';

import './Movie.css';

const movie = ( props ) => {

    return (
        <figure className="movie-box">
            <img src={props.poster} alt={props.title} className="movie-box__poster" />
            <div className="movie-box__detail">
                <h3 className="movie-box__title">{props.title}</h3>
                <figcaption className="movie-box__plot">{props.shortPlot}</figcaption>
                <button className="movie-box__btn">Read More</button>
            </div>
        </figure>
    );
}
export default movie;