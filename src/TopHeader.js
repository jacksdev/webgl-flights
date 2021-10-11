import React from 'react';
import { motion } from "framer-motion";


const topHeaderCSS = {
  position:'absolute',
  height: '80px',
  width: '100%',
  top:'-80px',
  background:'#fff',
  zIndex: 5,
	boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034)'
}

const headerFont = {
  fontFamily:'Merriweather',
  fontSize:'20px',
  lineHeight:'32px',
  paddingTop:'20px',
  paddingLeft:'20px',
  color:'#b4d2d7',
  // border:'1px solid red'
}


export default function TopHeader() {
  return <motion.span  
              animate={{top:0}}
              transition={{ duration: 1, delay: 1.3 }}
              style={topHeaderCSS}>

         <div style={headerFont}>
            Real Flights
        </div>
      </motion.span>;
}

