import React from 'react';
// import logo from '../../images/logo.png';


const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center font-bold">
        <h1>Farmeezy</h1>
        {/* <img src={logo} alt="logo" className="w-80" /> */}
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-black text-base text-center mx-2 cursor-pointer">About</p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">Docs</p>
        <p className="text-black text-base text-center mx-2 cursor-pointer">Schemes</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-black text-sm text-center">Helping the Farmers to Grow</p>
      <p className="text-black text-sm text-center font-medium mt-2">info@farmeezy.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-black text-left text-xs">@farmeezy2023</p>
      <p className="text-black text-right text-xs">All rights reserved</p>
    </div>
  </div>
  )
}

export default Footer