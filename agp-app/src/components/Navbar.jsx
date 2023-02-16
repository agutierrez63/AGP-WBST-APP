import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl font-bold text-primary'>AGP</h1>
        <ul className="hidden md:flex">
          <li className='p-4'><a href='/'>Home</a></li>
          <li className='p-4'><a href='/about'>About</a></li>
          <li className='p-4'><a href='/products'>Products</a></li>
          <li className='p-4'><a href='/contact'>Contact</a></li>

        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
        </div>

        <div  className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-[#f0f0f0] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-primary m-4'>AGP</h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-400'><a href='/'>Home</a></li>
            <li className='p-4 border-b border-gray-400'><a href='/about'>About</a></li>
            <li className='p-4 border-b border-gray-400'><a href='/products'>Products</a></li>
            <li className='p-4 border-b border-gray-400'><a href='/contact'>Contact</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar