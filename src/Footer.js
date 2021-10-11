import React from 'react';
import { motion } from "framer-motion";


const footerCss = {
	position:'absolute',
	bottom:'0',
	width:'100%',
	height:'1px',
  display:'block',
  background:'#fff',
  fontFamily:'Lato',
  fontSize:'20px',
  lineHeight:'32px',
  zIndex: 6,
	boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034)'
}


export default function TopHeader() {
  return <motion.div  
              animate={{height:50}}
              transition={{ duration: 1, delay: 1.3 }}
              style={footerCss}>
      </motion.div>;
}

