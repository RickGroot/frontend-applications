import React, { useEffect } from 'react';
import loadBar from './data/bar'

function Barchart() {

    useEffect(() => {
        loadBar();
    }, []);

    return (
        <svg id='bar'>
        </svg>
    )
}

export default Barchart;