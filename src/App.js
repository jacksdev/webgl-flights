import React, { Component } from 'react';
import './App.css';

import DeckGL, {IconLayer} from 'deck.gl';
import * as d3 from 'd3';
import {StaticMap} from 'react-map-gl';

import Airports from 'airports';

import PlaneIcon from './images/plane.png';
import arIcon from './images/ar.png';
// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamZyb2xvdiIsImEiOiJjanFta2JhMTAzdGVsNDRsYjZjbnB2aGk2In0.E1v_EBQE7FeLEx_q0S3ELg';

// Initial viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 5,
  pitch: 36,
  bearing: 0
};

// Data to be used by the LineLayer



class App extends React.Component {

  state = {
    planes: [],
    airports:[]
  }

  


  componentDidMount(){

    this.setAirports()
    this.fetchFlightData()
  }

  setAirports = () => {

    const cleanedAirprts = Airports.filter(a => a.type === 'airport');
    console.log(cleanedAirprts)

    return this.setState({
      airports: cleanedAirprts.map(d => ({
        iata: d.iata,
        iso: d.iso,
        long: Number(d.lon),
        lat: Number(d.lat)
      }))
    })

  }


  fetchFlightData = () => {

    let app = this;

    fetch('https://opensky-network.org/api/states/all')
    .then(res => res.json())
    .then(function(myJson) {
      let data = myJson.states;
      //console.log(data[0])
      return app.setState({
        planes: data.map(d => ({
          callsign: d[1],
          long: d[5],
          lat: d[6],
          velocity: d[9],
          alt: d[13],
          orgin: d[16],
          true_track: d[10]
        }))
      })
    });
    setTimeout(this.fetchFlightData, 10 * 1000)
  }
  

  render(cleanedAirprts) {

    const layers = [
      new IconLayer({
        id: 'icon_airport',
        data: this.state.airports,
        pickable: false,
        iconAtlas: arIcon,
        iconMapping: {
          marker: {x: 0, y: 0, width: 200, height: 200, mask: false}
        },
        getIcon: d => "marker",
        sizeScale: 10,
        opacity: 0.9,
        getPosition: d => [d.long, d.lat]
        // onHover: ({d, x, y}) => {
        //   const tooltip = `${d.callsign}\n${d.orgin}`;
  
        // }
      }),
      new IconLayer({
      id: 'planes',
      data: this.state.planes,
      pickable: false,
      iconAtlas: PlaneIcon,
      iconMapping: {
        marker: {x: 0, y: 0, width: 532, height: 532, mask: false}
      },
      getIcon: d => "marker",
      sizeScale: 25,
      opacity: 1,
      getPosition: d => [d.long, d.lat],
      getAngle: d => 65 + (d.true_track * 180) / Math.PI,
      // onHover: ({d, x, y}) => {
      //   const tooltip = `${d.callsign}\n${d.orgin}`;

      // }
    }),
   
  ]

    

    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    );
  }
}


export default App;
