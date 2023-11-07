'use client'

import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'



function Intro() {
  return (
    <section className='max-w-[50rem] text-center sm:mb-0 mb-28 '>
        <div className='flex justify-center items-center'>
            <div className='relative'>
                <motion.div
                initial = {{opacity:0,scale:0}}
                animate = {{opacity:1,scale:1}}
                transition={{
                    type: "tween",
                    duration:0.2
                }}
                >
                <Image src='/profilephoto.jpg' width={192} height={192} quality={95} priority= {true}  className='rounded-full border-white h-24 w-24 shadow-xl border-[0.35rem] object-cover' alt='profilephoto'/>
                </motion.div>
                <motion.span
                initial = {{opacity:0,scale:0}}
                animate = {{opacity:1, scale:1}}
                transition={{
                    type: "spring",
                    stiffness: "125",
                    delay: 0.1,
                    duration: 0.7,
                }}
                 className=' bottom-0 right-0  absolute text-4xl '>👋</motion.span>
            </div>
        </div>

        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl '
        initial={{opacity: 0, y:100}}
        animate= {{opacity:1,y:0}}
        
        >
            <span className='font-bold'>Hello I am Ambuj, </span> 
            a passionate <span className='font-bold'>2nd year undergraduate</span> with a knack for <span className='italic'>coding and problem-solving,</span> I create innovative projects using <span className='underline'>React (Next.js)</span>
            </motion.p>

        <motion.div className='flex text-lg font-medium px-4 flex-col sm:flex-row  justify-center sm:items-center gap-2 '
        initial = {{opacity:0,y:100}}
        animate ={{opacity:1,y:0}}
        transition={{
            delay:0.1,

        }}
        >
            <Link href={'#contact'} className='group bg-gray-900 text-white rounded-full flex gap-2 items-center px-7 py-3 justify-center  outline-none focus:scale-110 hover:scale-110 transition hover:bg-gray-950 active:scale-105 '>  Contact me <BsArrowRight className='group-hover:translate-x-1 opacity-70' />
            </Link>

            <a href="/CV.pdf" download className='flex border-black/10  group items-center bg-white  rounded-full px-7 py-3 justify-center outline-none focus:scale-110 hover:scale-110 transition hover:bg-white active:scale-105'>Resume  <HiDownload className='group-hover:translate-y-1 opacity-70 transition cursor-pointer ' /> </a>

            <a href="https://www.linkedin.com/in/ambuj-kulshrestha-24386b224/" target='_blank' className='flex items-center bg-white p-4 border-black/10  rounded-full  justify-center outline-none focus:scale-[1.10] hover:scale-[1.15] transition hover:bg-white active:scale-105 hover:text-black '> <BsLinkedin/> </a>
            <a href="https://github.com/kdotambuj" target='_blank' className='flex items-center bg-white p-4 border-black/10  rounded-full  justify-center outline-none focus:scale-[1.10] hover:scale-[1.15] transition hover:bg-white active:scale-105 hover:text-black '> <FaGithub/> </a>
            
        </motion.div>



    </section>

    
   
    
  )
}

export default Intro