import React from 'react';

import classes from './Layout.module.css';
import Icons from '../../assets/img/sprite.svg';

const layout = ( props ) => (
    <div className={classes.layout}>
       <header>
        <h1>Brand</h1>
        <form action="#" className="search">
            <input type="search" className="search__input" placeholder="Search movie"/>
            <button className="search__btn">
                <svg className="search__icon">
                    <use xlinkHref={`${Icons}#icon-magnifying-glass`}></use>
                </svg>
            </button>
        </form>
        <nav className="user-nav">
            <div classame="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use xlinkHref={`${Icons}#icon-bookmark`}></use>
                </svg>
            </div>
        </nav>
       </header> 
    </div>
)
export default layout;