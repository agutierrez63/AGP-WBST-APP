import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CompanyLogo from '../../assets/company_logo.png'

const PageNotFound = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full bg-white py-16 px-4 justify-center'>
        <img className='w-[200px] mx-auto my-4' src={CompanyLogo} alt='/'/>
        <div className='text-center'>
        <h1>Whoops!</h1>
        <p> The info you're looking for can't be found!
        <br/>You might want to try searching again or explore one of the links below.
        </p>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default PageNotFound