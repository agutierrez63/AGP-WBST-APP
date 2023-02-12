import React from 'react';
import Single from '../assets/payment-method.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Sole Proprietor</h2>
                <p className='text-center text-4xl font-bold'>Ask for a quote.</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>packages details</p>
                    <p className='py-2 border-b mx-8'>packages details</p>
                    <p className='py-2 border-b mx-8'>packages details</p>
                </div>
                <button className='bg-[#d2a993] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get a quote</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-trasnparent' src={Single} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Small Business</h2>
                <p className='text-center text-4xl font-bold'>Ask for a quote.</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>packages details</p>
                    <p className='py-2 border-b mx-8'>packages details</p>
                    <p className='py-2 border-b mx-8'>packages details</p>
                </div>
                <button className='bg-black text-[#d2a993] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get a quote</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/'/>
                <h2 className='text-2xl font-bold text-center py-8'>Corporation</h2>
                <p className='text-center text-4xl font-bold'>Ask for a quote.</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>packages details</p>
                    <p className='py-2 border-b mx-8'>packages details</p>
                    <p className='py-2 border-b mx-8'>packages details</p>
                </div>
                <button className='bg-[#d2a993] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get a quote</button>
            </div>
        </div>
    </div>
  )
}

export default Cards