import React from 'react';
import loadBar from './data/bar'

function Barchart() {


    return (
        <div>
        <svg id='bar'>
        </svg>
        <button onClick={loadBar}>bar</button>
        </div>
    )
}

export default Barchart;