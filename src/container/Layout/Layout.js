import React, { Component } from 'react';
import Header from '../../component/Header/Header';
import Movies from '../Movies/Movies'
import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        title: '',
        movies: null
    }

    onInputChangeHandler = (e) => {
        this.setState({ title: e.target.value });
    }

    onFormSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.title);
        this.setState({ title: '' });
        // TBD - fetch data from OMDB
    }

    render() {
        return (
            <div className={classes.layout}>
                <Header 
                    title={this.state.title}
                    inputChangeHandler={this.onInputChangeHandler}
                    formSubmitHandler={this.onFormSubmitHandler} />

                <Movies movies={this.state.movies} />
            </div>
        )
    }
}
export default Layout;