import React from 'react';

import Movie from '../../Movie/Movie';
import './PreviewBox.css';

const previewBox = ( props ) => {
    let items = null;
    let classes = ["preview-box"];

    if (items) {
        classes.push("preview-box--active");
    }
    
    return (
        <div className={classes.join(' ')}>
            <ul className="preview-box__list">
                <Movie poster="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" title="Check" shortPlot="Bla Bla" year="2018" />
                <Movie poster="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" title="Check" shortPlot="Bla Bla" year="2018" />
                {items}
            </ul>
        </div>
    );
}
export default previewBox;