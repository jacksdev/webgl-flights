import React from 'react';
import { motion } from "framer-motion";



const topHeader = {
  position:'absolute',
  display:'flex',
  justifyContent:'space-between',
  height: '80px',
  width: '100%',
  top:'-80px',
  background:'#fff',
  zIndex: 5,
	boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034)'
}

const headerFont = {
  fontFamily:'Merriweather',
  display:'inline-block',
  fontSize:'20px',
  lineHeight:'32px',
  paddingTop:'30px',
  paddingLeft:'20px',
  color:'#9c9c9c',
  opacity:'0'
  // border:'1px solid red'
}

const headerLoading = {
  fontFamily:'Merriweather',
  display:'inline-block',
  fontSize:'15px',
  lineHeight:'32px',
  paddingTop:'30px',
  paddingRight:'20px',
  color:'#9c9c9c',
  opacity:'0'
  // border:'1px solid red'
}


export default function TopHeader() {
  return <motion.div  
              animate={{top:0}}
              transition={{ duration: 1, delay: 1.3 }}
              style={topHeader}>

              <motion.span 
                    animate={{opacity:1}}
                    transition={{ duration: 1, delay: 2 }}
                    style={headerFont}>
                  Real Flights &nbsp; &#9992;
              </motion.span>

              <motion.span 
                    animate={{opacity:1}}
                    transition={{ duration: 1, delay: 2 }}
                    style={headerLoading}>
                  Loading flight data...
              </motion.span>

      </motion.div>;
}

