import React from 'react';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ContactImg from '../../assets/contact_us_bg.jpeg'

const Contact = () => {
  return (
    <>
    <Navbar/>

    <div className='text-black'>
      <div className='max-w[800px] mt-[-96px] w-full h-[500px] mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Contact Us</h1>
      </div>
    </div>

    <div className='w-full bg-white py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>

        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>Let us take care of you.</h1>
          <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
          <img className='w-[500px] mx-auto my-4 justify object-left' src={ContactImg} alt='/'/>
        </div>

        <div className='my-4 flex flex-col justify-center' >
          <label class="block text-gray-700 text-sm font-bold p-1" for="username">Name</label>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full mb-4'>
            <input className='p-3 flex w-full  rounded-md border border-gray-400 text-black' type='text' placeholder='Enter Name'/>
          </div>

          <label class="block text-gray-700 text-sm font-bold p-1" for="email">Email</label>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md border border-gray-400 text-black' type='email' placeholder='Enter email'/>
          </div>

          <textarea class='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
            border border-solid border-gray-400 rounded transition ease-in-out my-4 ' id='formMessage' rows="3" placeholder="Your message">
          </textarea>
          <button className='bg-[#d2a993] text-black rounded-md font-medium w-[200px] my-4 px-6 py-3'>Send</button>
          <p className='text-black'>Alliance Graphics and Printing cares about the best qualtiy for your print. 
          Read our {' '}<span className='text-[#d2a993]'>Terms of Service</span>.</p>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact