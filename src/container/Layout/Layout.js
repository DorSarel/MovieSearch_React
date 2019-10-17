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
        this.setState({ title: e.target.value });
    }

    async onFormSubmitHandler(e) {
        e.preventDefault();
        this.setState({ 
            loading: true,
            movies: null
         });
        const response = await axios.get(`http://www.omdbapi.com/?s=${this.state.title}&apikey=2a3f737b`);
        const moviesArray = [...response.data.Search];
        this.setState({ 
            title: '',
            loading: false,
            movies: moviesArray
        });
    }

    render() {
        return (
            <div className={classes.layout}>
                <Header 
                    title={this.state.title}
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