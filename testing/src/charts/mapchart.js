import React from 'react';
import loadMap from './data/map';
import loadCircles from './data/circles';

function Mapchart() {
    

    return (
        <div>
        <svg id='map'>
            <g id='paths'></g>
            <g id='circles'></g>
        </svg>
        <button onClick={loadMap}>map</button>
        <button onClick={loadCircles}>cirkel</button>
        </div>
    )
}

export default Mapchart;