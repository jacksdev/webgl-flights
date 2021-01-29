import React from 'react';
import './App.css';

import DeckGL, {IconLayer} from 'deck.gl';

import {StaticMap} from 'react-map-gl';

import Airports from 'airports';

import PlaneIcon from './images/plane.png';
import arIcon from './images/ar.png';
// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamZyb2xvdiIsImEiOiJja2toaTIxOGYwMjl1MnVtbjQxcG94OG8xIn0.kI_ZUnQzjhvaOATGXkahMQ';

// Initial viewport settings
let initialViewState = {
  altitude: 1.5,
  bearing: 23.484374999999996,
  longitude: -100.0143893527711,
  latitude: 36.96157896529295,
  zoom: 3.903882166166096,
  pitch: 57.30605204596854
};


// Data to be used by the LineLayer



class App extends React.Component {

  state = {
    planes: [],
    airports:[],
    hoveredPlane:{
      ico: ''
    }
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
          ico24: d[0],
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
        sizeScale: 8,
        opacity: 0.9,
        getPosition: d => [d.long, d.lat]
        // onHover: ({d, x, y}) => {
        //   const tooltip = `${d.callsign}\n${d.orgin}`;
  
        // }
      }),
      new IconLayer({
      id: 'planes',
      data: this.state.planes,
      pickable: true,
      iconAtlas: PlaneIcon,
      iconMapping: {
        marker: {x: 0, y: 0, width: 532, height: 532, mask: false}
      },
      getIcon: d => "marker",
      sizeScale: 25,
      opacity: 1,
      getPosition: d => [d.long, d.lat],
      getAngle: d => 65 + (d.true_track * 180) / Math.PI,
      onHover: (d) => {

        if(d.object){
          this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {hoveredPlane:{
              ico: d.object.ico24,
              callsign: d.object.callsign,
              velocity: d.object.velocity,
              alt: d.object.alt
            }}
          });
          console.log(d.object)
        }
      
      }
    })
   
  ]


  const divStyle = {
    color: 'blue',
    fontSize: 35,
    position: 'absolute'
  };

  function Welcome(props) {
    return <div style={divStyle}>

      Plane: {props.plane.callsign} <br />
      Altitude: {props.plane.alt} feet <br />
      Velocity: {props.plane.velocity} knots<br />

      </div>;
  }

    

    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} 
         />

        {/* <Welcome plane={this.state.hoveredPlane} /> */}
      </DeckGL>
    );
  }
}


export default App;