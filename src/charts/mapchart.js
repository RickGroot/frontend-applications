import React, { useEffect } from 'react';
import loadMap from './data/map';
import loadCircles from './data/circles';

function Mapchart() {

    useEffect(() => {
        loadMap();
        loadCircles();
}, []);

    return (
        <svg id='map'>
            <g id='paths'></g>
            <g id='circles'></g>
        </svg>
    )
}

export default Mapchart;