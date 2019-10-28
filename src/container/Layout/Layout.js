import React, { Component } from 'react';
import Header from '../../component/Header/Header';
import Movies from '../Movies/Movies'
import classes from './Layout.module.css';

import axios from 'axios';

class Layout extends Component {

    state = {
        title: '',
        movies: [],
        likedMovies: [],
        loading: false
    }

    onInputChangeHandler = (e) => {
        const title = e.target.value;
        
        if (!title) {
            this.setState({ movies: [] });
        }
        this.setState({ title });
    }

    async onFormSubmitHandler(e) {
        e.preventDefault();
        this.setState({ 
            movies: []
         });
        if (this.state.title === '') {
            return;
        }

        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${this.state.title}&apikey=2a3f737b`);
            const uniqueMovies = {};
            for (let movieObj of response.data.Search) {
                uniqueMovies[movieObj.imdbID] = movieObj;
            }
            
            const moviesArray = [];
            for (let key in uniqueMovies) {
                moviesArray.push(uniqueMovies[key]);
            }
            this.setState({ 
                movies: moviesArray
            });
        } catch (e) {
            alert('Too many results or cannot find relevant movie');
        }
    }



    toggleBookmarkHandler = (movie, e) => {
        e.preventDefault();
        const movies = [...this.state.movies];
        const newMovie = { ...movie };
        if (!this.isMovieMarked(movie)) {
            newMovie.isBookmark = true;
        } else {
            newMovie.isBookmark = false;
        }
        const movieIdx = movies.findIndex(mObj => mObj.imdbID === newMovie.imdbID);
        movies.splice(movieIdx, 1, newMovie);
        this.setState({ movies });
    }

    isMovieMarked = (movie) => {
        return movie.isBookmark;
    }

    render() {
        return (
            <div className={classes.layout}>
                <Header 
                    title={this.state.title}
                    movies={this.state.movies}
                    inputChangeHandler={this.onInputChangeHandler}
                    formSubmitHandler={this.onFormSubmitHandler.bind(this)}
                     />

                <Movies 
                    movies={this.state.movies}
                    shouldLoad={this.state.loading}
                    bookmarkHandler={(e) => this.toggleBookmarkHandler({}, e)} /> {/*TBD - send selectedMovie */}
            </div>
        )
    }
}
export default Layout;