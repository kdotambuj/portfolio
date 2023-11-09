import Image from 'next/image'
import React from 'react'
import familyguy from '@/public/familyguy.png'

function Projects() {
  return (
    <section className='flex flex-col justify-center items-center '>
      <h5 className='text-3xl  text-black mb-5 font-medium '>Projects</h5>

      
      <div className='flex  gap-3 overflow-hidden bg-white  rounded-lg border border-gray-200 shadow  max-w-[48rem] max-h-[32rem]'>
        <Image className='h-[20rem] w-[20rem] ' quality={100} alt='project' src={familyguy} />
        <div className='flex flex-col justify-center px-3  '>
          <h3 className='text-3xl font-semibold '>Family guy Wikipedia</h3>
          <p className=''>A wikipedia for a show along with quiz app </p>
        </div>
      </div>

      
      <div className='flex mt-3   gap-3 overflow-hidden bg-white rounded-lg border border-gray-200 shadow  max-w-[48rem] max-h-[32rem]'>
        
        <div className='flex flex-col justify-center px-3    '>
          <h3 className='text-3xl font-semibold '>Educative hub</h3>
          <p className=''>e-learning Platform with different courses.</p>
        </div>
        <Image className='h-[20rem] w-[20rem] ' quality={100} alt='project' src={familyguy} />
      </div>
    

    </section>
  )
}

export default Projects