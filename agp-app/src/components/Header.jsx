import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/company_logo.png'

const Header = ({
    heading,
    paragraph,
    linkName,
    linkUrl='#',
    linkHome='/'
}) => {

  return (
    <div className='mt-32 p-2'>
    <div className='flex justify-center'>
        <Link to={linkHome}>
            <img alt='AGP' className='h-14 w-14' src={Logo} />
        </Link>
    </div>
    <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
        {heading}
    </h2>
    <p className='mt-2 text-center text-sm text-gray-600'>
    {paragraph} {' '}
    <Link to={linkUrl} className='font-medium text-[#d2a993] focus:text-[#e6bdad]'>
        { linkName }
    </Link>
    </p>
</div>
  )
}

export default Header