import React from 'react';
import Header from '../../component/Header/Header';
import classes from './Layout.module.css';

const layout = ( props ) => (
    <div className={classes.layout}>
       <Header />
    </div>
)
export default layout;