import React from 'react';
import './App.css';

import TopHeader from './TopHeader';
import MapData from './MapData';
import Footer from './Footer';


// Data to be used by the LineLayer

export default function App() {
    return (
        <>    
        <TopHeader />
        <MapData />
        <Footer />
        </>
      );
}