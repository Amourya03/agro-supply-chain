import React from 'react'
// import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card';
import HeroSection from './HeroSection';

const Home = () => {

  return (
    <div>
      {/* <Navbar /> */}
    <div className='flex flex-col items-center justify-between gap-6 bg-gradient-to-tr from-sky-100 via-cyan-100 to-emerald-50'>
      <div className=''>
        <HeroSection />
      </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between flex-row gap-12'>
        {['model-1', 'model-2', 'model-3', 'model-4'].map((item, index) => (
          <Card modelId={item} title={item} key={item+index} />
        ))}
        </div>
      <div>ALL OTHER</div>
    </div>
    <Footer />
    </div>
  );
}

export default Home