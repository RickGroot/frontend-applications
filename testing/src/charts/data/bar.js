import * as d3 from 'd3';
import { margin,
    width,
    height,
    x,
    y,
    updateColor
 } from './modules/barCode';
    import { endpoint, endpoint2, selectedColumn } from './modules/endpoint'
    import { compare } from './modules/getData';

function loadBar() {

    var barSVG = d3.select("#bar")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

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
            // mapThings(result); //calls function that puts circles on the map
            barchart(result); //calls function that places barchart
            return result;
        });

        function filterData(dataArray, key) {
            return dataArray.map(item => item[key]); //filters column data from array
        }

//gets called when the data is collected
function barchart(data) {

    let heights = filterData(data, 'maximumVehicleHeight');
    let barData = mergeValues(heights);

    //scale the range of the data in the domains
    x.domain(barData.map(function (d) {
        return d.name; //sets names on x-axis
    }).sort(d3.ascending));
    y.domain([0, d3.max(barData, function (d) {
        return d.amount; //sets max value of y-axis based on data
    })]);

    //append the bars for the bar chart
    barSVG.selectAll(".bar")
        .data(barData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.name);
        })
        .attr("width", x.bandwidth())
        .attr("y", function (d) {
            return y(d.amount);
        })
        .attr("height", function (d) {
            return height - y(d.amount);
        })
        .attr('class', d=> updateColor(d))
        // .on("mouseover", mouseOverBar) //calls function when hovering
        // .on("mouseout", mouseOutBar) //calls function when not hovering

    //add the x axis
    barSVG.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    //add the y axis
    barSVG.append("g")
        .call(d3.axisLeft(y));
}

//puts all double values in a new object
function mergeValues(data) {
    return d3.groups(data, d => d)
        .map(([name, value]) => ({ //creates array in object with name and value
            name,
            amount: d3.rollup(value, d => d).length
        }))
}

// //when mouse is on a bar
// function mouseOverBar(event, d) { //add interactivity

//     barTooltip.html(d.amount + ' parkeergarages met <br> een hoogte van ' + d.name + 'cm'); //text of the tooltip

//     barTooltip.style('left', (event.pageX) + 'px') //position of the tooltip
//         .style('top', (event.pageY + 10) + 'px')
//         .attr('class', 'focus'); //sets class that shows tooltip
// }

// //when mouse is off a bar
// function mouseOutBar() { //sets hover back when not hovering
//     barTooltip.attr('class', 'unfocus'); //sets class for not showing tooltip
// }
}

export default loadBar;