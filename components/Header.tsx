"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {links} from '@/lib/data'


export default function Header() {
  return (
    <header className='z-[999] relative'>
        <motion.div className='fixed bg-white border-white top-0 w-full h-[4.5rem] left-1/2 rounded-none border border-opacity-40 bg-opactity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial = {{y:-100,x: '-50%', opacity:0}}
        animate = {{y:0, x:'-50%',opacity:1}}
        ></motion.div>

        
        <nav className='flex fixed top-[0.15rem] h-12 left-1/2 py-2 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
          <ul className='flex flex-wrap gap-y-1 w-[22rem] items-center justify-center text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5' >
            {links.map((link)=>(
              <li className='flex h-3/4 justify-center items-center relative' key={link.hash}>
                <Link href={link.hash} className=' transition flex w-full items-center justify-center px-3 py-3 hover:text-gray-950'>{link.name} </Link>
              </li>
            ))}
          </ul>
        </nav>


    </header>
    
  )
}
