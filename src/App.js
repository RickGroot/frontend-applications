import React from 'react';
import Barchart from './charts/barchart';
import Mapchart from './charts/mapchart';
import './App.css';
import Hummer from './img/hummer.jpg';

function App() {

  return(
      <article>
        <section className='head'>
          <h1>Met een Hummer in de parkeergarage</h1>
          <img src={Hummer} alt='Parkeergarage' className='cover'></img>
          <p>Parkeergarages zijn in elke grote stad te vinden, en worden het hele jaar door gebruikt door iedereen. Maar wat nou als je een grote auto hebt, pas je dan nog wel in de meeste parkeergarages?</p>
          <p>Een hummer is een voorbeeld van zo een grote auto, met maar liefst een hoogte van iets hoger dan 2 meter. In dit korte artikel heb ik uitgezocht in welke parkeergarages nog wel en niet geparkeerd kan worden met een Hummer.</p>
        </section>
        <section className='content'>
          <h2>Garage hoogtes in een snel overzicht</h2>
          <p>Hieronder staat een grafiek waarop alle hoogtes van parkeergarages staan. Zoals je ziet zijn er een heel aantal garages waar de Hummer niet in past. Totaal zijn er in Nederland 308 parkeergarages, die zich voornamelijk bevinden in de grote steden.</p>
          <Barchart />
          <p> Van deze parkeergarages zijn de meeste 2 meter hoog, wat net te laag is voor verschillende soorten auto's (waaronder Hummers). Ook zijn er veel parkeergarages die 1.90 meter hoog zijn. Hele hoge parkeergarages zijn op dit moment nog niet veel te vinden in Nederland, maar veel neiuwe parkeergarages worden tegenwoordig gebouwd met een hogere doorrijhoogte.</p>
          <h2 className='maptitle'>In kaart gebracht</h2>
          <p>In welke steden is het dan wel mogelijk om zonder te veel stress te parkeren? Op de map hieronder is te zien waar de parkeergarages liggen waar je kan parkeren met een Hummer of ander voertuig dat hoger is dan 2 meter.</p>
          <div className ='legend'>
            <div className='round1'></div>
            <p>Hoger dan 2M</p>
            <div className='round2'></div>
            <p>Lager dan 2M</p>
          </div>
          <Mapchart />
          <p>Zoals u hierboven kan zien zijn er nogsteeds een aantal parkeermogelijkheden voor een Hummer. In Amsterdam zijn er bijvoorbeeld een aantal kleine garages die geschikt zijn, maar ook in de grote steden als Rotterdam en Utrecht zijn genoeg mogelijkheden. In Friesland is zelfs elke parkeerplaats hoog genoeg!</p>
          <p>Uit de data van de parkeergarages is te halen dat maar liefst 95 parkeergarages toegankelijk zijn voor auto's die hoger zijn dan 2 meter, en er zijn maar liefst 213 garages niet toegankelijk. Dit is een groot verschil, maar evengoed zijn er dus nog bijna 100 parkeergarages hoog genoeg.</p>
        </section>
        <section className='sources'>
          <h3>Geraadpleegde bronnen</h3>
          <a href='https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s'>Open Data Parkeren: SPECIFICATIES PARKEERGEBIED</a>
          <a href='https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34'>GEO Parkeer Garages</a>
        </section>
      </article>
  )
}

export default App;