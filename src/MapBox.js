
import React, { useState } from 'react';
import { motion } from "framer-motion";
import DeckGL, {IconLayer} from 'deck.gl';
import {StaticMap} from 'react-map-gl';


export default function MapBox(){

	const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamZyb2xvdiIsImEiOiJja2toaTIxOGYwMjl1MnVtbjQxcG94OG8xIn0.kI_ZUnQzjhvaOATGXkahMQ';
	// Initial viewport settings
	let initialViewState = {
		altitude: 1.5,
		bearing: 23.484374999999996,
		longitude: -100.0143893527711,
		latitude: 36.96157896529295,
		zoom: 3.8,
		pitch: 57.30605204596854
	};

	return (

		<DeckGL
			initialViewState={initialViewState}
			controller={true}
			// layers={layers}
		> 
			<StaticMap  mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
		</DeckGL>
	)
}