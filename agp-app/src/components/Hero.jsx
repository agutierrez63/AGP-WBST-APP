import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-black'>
        <div className='max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#010101] font-bold p-2'>Quality Matters Here</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>For all your printing prerequisites.</h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>print, business cards, and </p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['banner', 'DTG', 'graphic']} typeSpeed={180} backSpeed={200} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>A better way to print.</p>
            <button className='bg-[#d2a993] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero