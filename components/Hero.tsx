// import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className='pb-20 pt-36  '>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white'/>
            <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vw] ' fill='white'/>
        
        
        </div>
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.] bg-grid-black/[0.2] relative flex items-center justify-center ">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/> */}
      <div 
    className='pb-100'>
      <div className='pb-{200} h-96 flex flex-col w-50 items-center gap-5'>
        <h2 className='text-white pd-100 pb-{200} font-inter'> DYNAMIC WEB MAGIC WITH NEXT.JS</h2>
        <h1 className='text-white text-6xl flex items-center font-inter w-700'>Transforming concepts Into <br />Seamless User Experience </h1>
        <h1 className='font-inter'>hii,i am adrin,a nextjs developer based in croatia</h1>
        <button className='bg-blaclk text-white px-10 py-3 rounded-full font-inter border border-white'>See my work</button>



      </div>
    </div>
    

    </div>


    </div>
  )
}

export default Hero