import React from 'react';
import { motion } from "framer-motion";


const topHeaderCSS = {
  position:'fixed',
  display:'block',
  height: '1px',
  width: '100%',
  background:'#fff',
  fontFamily:'Lato',
  fontSize:'20px',
  lineHeight:'32px',
  zIndex: 5,
	boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034)'
}


export default function TopHeader() {
  return <motion.div  
              animate={{height:50}}
              transition={{ duration: 1, delay: 1.3 }}
              style={topHeaderCSS}>
      </motion.div>;
}

