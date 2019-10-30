import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Movies from '../Movies/Movies'
import classes from './Layout.module.css';

import axios from 'axios';

class Layout extends Component {

    state = {
        title: '',
        movies: [],
        likedMovies: [],
        selectedMovie: null,
        loading: false,
        error: ''
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
            movies: [],
            error: ''
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
            const error = 'Invalid input - please provide full movie name';
            this.setState({ error });
        }
    }

    async onMovieClickHandler(imdbID) {
        let selectedMovie = null;

        this.setState({ title: '', movies: [], loading: true, error: '' });
        if (this.props.location.pathname !== '/') {
            this.props.history.push('/');
        }

        if (this.isMovieMarked(imdbID)) {
            selectedMovie = { ...this.state.likedMovies.find(mObj => mObj.imdbID === imdbID) };
        } else {
            // Send request to OMDB server
            try {
                const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=2a3f737b`);
                selectedMovie = { ...response.data };
                this.setState({ selectedMovie, loading: false });
            } catch (e) {
                const error = `Unable to fetch movie with Id: ${imdbID}. Please try again`;
                this.setState({ error, loading: false });
            }
        }
    }

    toggleBookmarkHandler = (movie, e) => {
        e.preventDefault();

        if (!movie) {
            return; // In case of null
        }

        const likedMovies = [...this.state.likedMovies];
        const newMovie = { ...movie };
        if (!this.isMovieMarked(movie.imdbID)) {
            newMovie.isBookmark = true;
            likedMovies.push(newMovie);
        } else {
            newMovie.isBookmark = false;
            const movieIdx = likedMovies.findIndex(mObj => mObj.imdbID === movie.imdbID);
            likedMovies.splice(movieIdx, 1);
        }
        // console.log(likedMovies);
        this.setState({ likedMovies, selectedMovie: newMovie });
    }

    isMovieMarked = (movieID) => {
        return (this.state.likedMovies.findIndex(mObj => mObj.imdbID === movieID) !== -1);
    }

    clearPreviewBox = () => {
        if (this.state.movies.length > 0) {
            this.setState({ movies: [] });
        }
    }

    render() {
        return (
            <div className={classes.layout}>
                <Header 
                    title={this.state.title}
                    movies={this.state.movies}
                    error={this.state.error}
                    inputChangeHandler={this.onInputChangeHandler}
                    formSubmitHandler={this.onFormSubmitHandler.bind(this)}
                    movieSelectHandler={this.onMovieClickHandler.bind(this)} />

            <Route path="/" exact render={(props) => (
                <Movies 
                    movie={this.state.selectedMovie}
                    shouldLoad={this.state.loading}
                    bookmarkHandler={(e) => this.toggleBookmarkHandler(this.state.selectedMovie, e)}
                    clickHandler={this.clearPreviewBox}
                    {...props} />
            )}></Route>
            <Route path="/bookmarks" render={() => <h1>Hello</h1>}></Route>
            </div>
        )
    }
}
export default withRouter(Layout);