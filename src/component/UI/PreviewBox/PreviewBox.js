import React from 'react';

import Movie from '../../Movie/Movie';
import './PreviewBox.css';

const previewBox = ( props ) => {
    let items = null;
    let classes = ["preview-box"];

    if (props.movies) {
        classes.push("preview-box--active");
        items = props.movies.map((movie, idx) => {
            return <Movie key={idx} poster={movie.Poster} title={movie.Title} year={movie.Year} />
        })
    } else {
        classes = ["preview-box"];
    }
    
    return (
        <div className={classes.join(' ')}>
            <ul className="preview-box__list">
                {items}
            </ul>
        </div>
    );
}
export default previewBox;