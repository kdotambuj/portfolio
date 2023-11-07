'use client'

import React from 'react'
import { motion } from 'framer-motion'

function SectionDivider() {
  return (
    <motion.div
     className='bg-gray-200 w-1 h-16 my-16 rounded-full hidden sm:block' 
    initial = {{opacity:0, y:100}}
    animate = {{opacity:1, y:0}} 
    transition={{delay:0.125}}
     ></motion.div>
  )
}

export default SectionDivider