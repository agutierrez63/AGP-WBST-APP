import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/company_logo.png';

const Navbar = ({ linkHome='/'}) => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <Link to={ linkHome }><img alt='AGP' className='m-4 h-14 w-14' src={Logo} /></Link>

      <ul className="hidden md:flex">
        <li className='p-4'><a href='/'>Home</a></li>
        <li className='p-4'><a href='/about'>About</a></li>
        <li className='p-4'><a href='/products'>Products</a></li>
        <li className='p-4'><a href='/contact'>Contact</a></li>
        <li className='p-4'><a href='/signin'>Sign In</a></li>
      </ul>

      <div onClick={ handleNav } className='block md:hidden'>
        { nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} /> }
      </div>

      <div  className={ nav ? 'z-10 fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-400 bg-[#f0f0f0] ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <div onClick={ handleNav } className='block md:hidden'>
          { nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} /> }
        </div>
        <ul className='uppercase p-4'>
          <li className='p-4 border-gray-400 text-center'><a href='/'>Home</a></li>
          <li className='p-4 border-gray-400 text-center'><a href='/about'>About</a></li>
          <li className='p-4 border-gray-400 text-center'><a href='/products'>Products</a></li>
          <li className='p-4 border-gray-400 text-center'><a href='/contact'>Contact</a></li>
        </ul>
        <div className='flex flex-col items-center'>
          <a href='/signin'>
            <button className='bg-[#d2a993] text-black rounded-md font-medium w-[200px] ml-2 my-2 px-6 py-3'>Sign In</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar