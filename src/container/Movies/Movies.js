import React from 'react';
import Movie from '../../component/Movie/Movie';

import './Movies.css';

const movies = ( props ) => {

    let movieComponents;
    if (props.movies) {
        movieComponents = (
            <Movie 
            title="Harry potter"
            shortPlot="Bla Bla" />
        );
    }

    return (
        <main className="movies">
          {movieComponents}  
        </main>
    )
}

export default movies;