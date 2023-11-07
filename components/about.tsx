'use client'

import React from 'react'
import { motion } from 'framer-motion'

function about() {
  return (
    <motion.section className='max-w-[45rem] text-center mb-28 sm:mb-0 leading-8 '
    initial = {{opacity:0,y:100}}
    animate = {{opacity:1,y:0}}
    transition={{
        delay: 0.175
    }}
    >
        <h2 className='text-3xl font-medium mb-8 capitalize '>About me</h2>
        
        <p className='mb-3 '>I'm currently in my second year at <span className='italic'> <a href="https://www.dei.ac.in/dei/" target='_blank'>Dayalbagh Educational Institute</a></span>, where I've been immersing myself in the world of web development. With a focus on both <span className='underline font-medium '>front-end</span> aesthetics and robust <span className='underline font-medium '>back-end</span> functionality, I take pride in creating websites that are not only visually appealing but also highly functional.

I'm constantly striving to enhance my skills. My dedication to learning is unwavering, and I am always on the lookout for opportunities to broaden my knowledge and deepen my technical expertise.</p>

        <p>I'm open to new connections and excited about the potential for fresh and exciting collaborations. 

Feel free to <span className='font-[600] '>reach out</span>, and let's explore the possibilities together!</p>
    </motion.section>
  )
}

export default about