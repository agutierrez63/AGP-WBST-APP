import React from 'react'
import CompanyLogo from '../assets/company_logo.png'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full py-[2rem] bg-white'>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black '>
        <div>
          <img className='w-[80px]' src={CompanyLogo} alt='/'/>
          <p className='py-4'>&copy; Alliance Graphics and Printing</p>
          <div className='flex justify-between md:w-[75%] my-6'>
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
              <h6 className='font-medium text-gray-400'>Support</h6>
              <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
              </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Contact</li>
              <li className='py-2 text-sm'>Products</li>
            </ul>
          </div>
          <div>
              <h6 className='font-medium text-gray-400'>Legal</h6>
              <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer