import * as d3 from 'd3';
import {
    endpoint,
    endpoint2,
    selectedColumn
} from './modules/endpoint'
import {
    compare
} from './modules/getData';
import {
    calculateRadius,
    mapProjection,
    updateColor
} from './modules/mapCode';
// import { sliderVertical } from 'd3-simple-slider';

function loadCircles() {


    let mapSVG = d3.select('#map');


    function getData(url) {
        return fetch(url); //fetches data from API url
    }

    function filterObjectValue(dataArray, key) {
        return dataArray.filter(item => item[key] > 0); //returns only objects with a key-value higher than 0
    }



    //data from endpoint 1
    let data1 = getData(endpoint) //calls function getData with API link
        .then(result => { //only continues when data is fetched
            return result.json()
        })
        .then(RDWData => {
            const filteredDataObjects = filterObjectValue(RDWData, selectedColumn); //callsfilterObject with data and column ID

            return filteredDataObjects;
        })

    //data from endpoint 2
    let data2 = getData(endpoint2) //calls function getData with API link
        .then(result => { //only continues when data is fetched
            return result.json() //puts result into JSON
        })
        .then(RDWData => {
            return RDWData;
        })

    //all the clean data
    compare(data1, data2) //calls compare function, and logs result when ready
        .then(result => { //fires when data is collected
            mapThings(result); //calls function that puts circles on the map
            // barchart(result); //calls function that places barchart
            return result;
        });

    function mapThings(object) { //gets called when data is ready

        //draw the circles on the map
        mapSVG.select('#circles').selectAll('circle')
            .data(object)
            .enter().append('circle')
            .attr('class', d => {
                return d.maximumVehicleHeight
            }) //adds class to interact with slider
            .attr('cx', d => {
                return mapProjection(d.location)[0];
            }) //adds location from data object
            .attr('cy', d => {
                return mapProjection(d.location)[1];
            })
            .attr('r', d => {
                return calculateRadius(d.capacity);
            }) //calls function to calculate radius
            .attr('class', d => updateColor(d)) //calls color class
    }

    



    console.log('hallo')

}

export default loadCircles;