import React from 'react';
import AboutImg from '../assets/about_us_bg.jpeg';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={AboutImg} alt='/'/>
          <div className='flex flex-col justify-center'>
            <p className='text-[#010101] font-bold '>ALLIANCE GRAPHICS & PRINTING</p>
            <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold py-2'>Printing with the finest quality.</h1>
            <p>
            Alliance Graphics & Printing is a well-renowned print shop that has continually featured a variety of 
            high-quality and affordable products since day one. We are a Local Print Shop that offers DTG (Direct to Garment) 
            printing, business cards, banners, graphics design services, etc, and offer a variety of methods to make sure you 
            and your apparel look the best. As Kern County’s first Direct to Garment Printing Company, AGP can help you promote 
            and we will be more than glad to answer any questions or requests. Feel free to email us or call us with any questions, 
            and we will be more than gladly to meet with you upon request.
            </p>
            <button className='bg-black text-[#d2a993] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default About