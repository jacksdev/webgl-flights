import React from 'react';
import './App.css';

import TopHeader from './TopHeader';
// import MapBox from './MapBox';
import MapData from './MapData';
import Footer from './Footer';


// Data to be used by the LineLayer

export default function App() {
    return (
        <>    
        <TopHeader />
        {/* <MapBox /> */}
        <MapData />
        <Footer />
        </>
      );
}