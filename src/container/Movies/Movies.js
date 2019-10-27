import React from 'react';
import Movie from '../../component/Movie/Movie';
import Spinner from '../../component/UI/Spinner/Spinner';

import './Movies.css';

const movies = ( props ) => {

    let movieComponents = null;

    if (props.shouldLoad) {
        movieComponents = <Spinner />;
    }

    // if (props.movies) {
    //     movieComponents = props.movies.map((movieObj, idx) => {
    //         return <Movie 
    //                     key={`${movieObj.imdbID}_${idx}`} 
    //                     title={movieObj.Title}
    //                     poster={movieObj.Poster}
    //                     shortPlot={movieObj.Type} />
    //     });
    // }

    return (
        <main className="movies">
          {movieComponents}  
        </main>
    )
}

export default movies;