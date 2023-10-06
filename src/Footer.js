import React from 'react';
import { motion } from "framer-motion";
// import gitImg from './images/git.png';

const footerCss = {
	position:'absolute',
  display: 'flex',
  justifyContent:'space-between',
	bottom:'-50px',
  height:'50px',
	width:'100%',
  background:'#fff',
  zIndex: 6,
	boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034)'
}




const headerLoading = {
  fontFamily:'Merriweather',
  display:'inline-block',
  fontSize:'15px',
  lineHeight:'32px',
  paddingTop:'10px',
  paddingRight:'20px',
  paddingLeft:'20px',
  color:'#9c9c9c',
  opacity:'0'
  // border:'1px solid red'
}


export default function TopHeader() {
  return <motion.div  
              animate={{bottom:0}}
              transition={{ duration: 1, delay: 1.3 }}
              style={footerCss}>

         

            <motion.span 
                  animate={{opacity:1}}
                  transition={{ duration: 1, delay: 3, yoyo:Infinity}}
                  style={headerLoading}>
                Loading data...
            </motion.span>

      </motion.div>;
}

