import React, { Component } from 'react';
import Header from '../../component/Header/Header';
import Movies from '../Movies/Movies'
import classes from './Layout.module.css';

import axios from 'axios';

class Layout extends Component {

    state = {
        title: '',
        movies: null,
        loading: false
    }

    onInputChangeHandler = (e) => {
        const title = e.target.value;
        
        if (!title) {
            this.setState({ movies: null });
        }
        this.setState({ title });
    }

    async onFormSubmitHandler(e) {
        e.preventDefault();
        this.setState({ 
            movies: null
         });
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

    render() {
        return (
            <div className={classes.layout}>
                <Header 
                    title={this.state.title}
                    movies={this.state.movies}
                    inputChangeHandler={this.onInputChangeHandler}
                    formSubmitHandler={this.onFormSubmitHandler.bind(this)} />

                <Movies 
                    movies={this.state.movies}
                    shouldLoad={this.state.loading} />
            </div>
        )
    }
}
export default Layout;