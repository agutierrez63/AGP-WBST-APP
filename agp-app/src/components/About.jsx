import React from 'react';
import AboutImg from '../assets/about_us_bg.jpeg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={AboutImg} alt='/'/>
          <div className='flex flex-col justify-center'>
            <p className='text-[#010101] font-bold '>ALLIANCE GRAPHICS & PRINTING</p>
            <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold py-2'>Printing with the finest quality.</h1>
            <p>
            We are a Local Print Shop that offers DTG (Direct to Garment) printing, business cards, banners, 
            graphics design services, etc. We offer a variety of methods to make sure you and your apparel 
            looks the best.
            </p>
            <button className='bg-black text-[#d2a993] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default About