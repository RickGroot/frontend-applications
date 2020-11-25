import * as d3 from 'd3';

//set dimentions for bar chart
let margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
};
// let width = parseInt(getComputedStyle(document.querySelector('#bar')).width) - margin.left - margin.right;
// let height = parseInt(getComputedStyle(document.querySelector('#bar')).height) - margin.top - margin.bottom;
let width = 700 - margin.left - margin.right;
let height = 400 - margin.top - margin.bottom;

//set the ranges
var x = d3.scaleBand()
    .range([0, width])
    .padding(0.1);

var y = d3.scaleLinear()
    .range([height, 0]);

function updateColor(d) {
    if (parseInt(d.name) <= 200) {
        return 'redBar';
    } else {
        return 'greenBar';
    }
}

export {
    margin,
    width,
    height,
    x,
    y,
    updateColor
};