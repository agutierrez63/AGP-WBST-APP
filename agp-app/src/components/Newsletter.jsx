import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>Want to stay up to date and recieve special promotions. &#x1F389;</h1>
                <p className='text-black'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter email'/>
                    <button className='bg-[#d2a993] text-black rounded-md font-medium w-[200px] ml-4 my-4 px-6 py-3'>Notify Me</button>
                </div>
                <p className='text-black'>We care about the best qualtiy for your print. Read our <span className='text-[#d2a993]'>Privacy Policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter