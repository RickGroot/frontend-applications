import React from 'react';
// import * as d3 from 'd3';
// import loadMap from './charts/data/data';
import Barchart from './charts/barchart';
import Mapchart from './charts/mapchart';
import './App.css';

function App() {

  return(
      <article>
      <h1>Met een Hummer in de parkeergarage</h1>
      <p>Parkeergarages zijn in elke grote stad te vinden, en worden het hele jaar door gebruikt door iedereen. Maar wat nou als je een grote auto hebt, pas je dan nog wel in de meeste parkeergarages?</p>
      <p>Een hummer is een voorbeeld van zo een grote auto, met maar liefst een hoogte van iets hoger dan 2 meter. In dit korte artikel heb ik uitgezogd in welke parkeergarages nog wel en niet geparkeerd kan worden met een Hummer.</p>
      <h2>Even een snel overzicht</h2>
      <Barchart />
      <p>Hierboven staat een grafiek waarop alle hoogtes van parkeergarages staan. Zoals je ziet zijn er een heel aantal garages waar de Hummer niet in past.</p>
      <h2>In kaart gebracht</h2>
      <p>In welke steden is het dan wel mogelijk om zonder te veel stress te parkeren? Op de map hieronder is te zien waar de parkeergarages liggen waar je kan parkeren met een Hummer of ander voertuig dat hoger is dan 2 meter.</p>
      <Mapchart />
      <p>Zoals u hierboven kan zien zijn er nogsteeds een aantal parkeermogelijkheden voor een Hummer. In Amsterdam zijn er bijvoorbeeld een aantal kleine garages die geschikt zijn, maar ook in de grote steden als Rotterdam en Utrecht zijn genoeg mogelijkheden. In Friesland is zelfs elke parkeerplaats hoog genoeg!</p>
      </article>
  )
}

export default App;