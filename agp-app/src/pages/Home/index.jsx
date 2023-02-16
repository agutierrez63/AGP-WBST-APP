import React from 'react';
import AboutUs from "../../components/About";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Newsletter/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default Home