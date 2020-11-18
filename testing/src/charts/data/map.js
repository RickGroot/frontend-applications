import * as d3 from 'd3';
import { onZoom, mapSVG, mapPath } from './modules/mapCode'

function loadMap() {

    let mapSVG = d3.select("#map");

    function drawMap() {
        d3.json("https://gist.githubusercontent.com/larsbouwens/1afef9beb0c3df0e4b24/raw/5ed7eb4517eee5737a4cb4551558e769ed8da41a/nl.json").then(data => {

            //draw the map
            mapSVG.selectAll("#paths")
                .selectAll("path")
                .data(data.features)
                .enter().append("path")
                .attr("d", mapPath)
        })

        //zooming on map
        mapSVG.call(d3.zoom()
            .scaleExtent([1, 4]) //maximum zooming levels
            .translateExtent([ //maximum panning levels
                [-200, -200],
                [1000, 800]
            ])
            .on('zoom', e => onZoom(e, mapSVG))); //calls function onZoom
    }


    
    drawMap()
}

export default loadMap;