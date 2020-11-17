import React from 'react';
import Barchart from './charts/barchart';
import Mapchart from './charts/mapchart';
import './App.css';

function App() {

  return(
    <div>
      <article>
      <h1>Parkeergarages in Nederland</h1>
      <p>Je hebt het allemaal wel eens, pas ik nou wel of niet in die parkeergarage? Vaak als je met een dakkoffer rijd weet je niet precies waar je wel en niet terecht kan. Hoe het zit met de hoogtes van parkeergarages voor vakantiegangers heb ik hier even kort duidelijk gemaakt.</p>
      <Barchart />
      <p>Wil je weten in welke parkeergarages jij kan parkeren in Nederland? Bekijk dit dan snel in de map hieronder!</p>
      <Mapchart />
      </article>
    </div>
  )
}

export default App;