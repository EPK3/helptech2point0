import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineHome, AiOutlineTool, AiOutlineLaptop, AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineSkype  } from 'react-icons/ai'
import { useStateContext } from '../Context/StateContext';

const DropDown = () => {
    const dropdownRef = useRef();
    const { setShowDropdown } = useStateContext();

  return (
    <div className='flex flex-col fixed h-screen w-[350px] bg-faded z-50 m-auto' ref={dropdownRef}>
        <div className='flex w-full justify-end mx-auto'>
            <AiOutlineArrowLeft className='flex text-white text-3xl m-5 hover:text-orange' onClick={() => setShowDropdown(false)}/>
        </div>
        <div className='flex m-5 cursor-pointer hover:scale-105 text-white hover:text-orange'>
            <AiOutlineHome className='inline-flex text-4xl mr-5'/>
            <h1 className='inline-flex text-3xl'>Home</h1>
        </div>
        <div className='flex m-5 cursor-pointer hover:scale-105 text-white hover:text-orange'>
            <AiOutlineTool className='inline-flex text-4xl mr-5'/>
            <h1 className='inline-flex text-3xl'>Repairs</h1>
        </div>
        <div className='flex m-5 cursor-pointer hover:scale-105 text-white hover:text-orange'>
            <AiOutlineLaptop className='inline-flex text-4xl mr-5'/>
            <h1 className='inline-flex text-3xl'>Services</h1>
        </div>
        <div className='flex my-10 mx-5 cursor-pointer justify-center'>
            <AiOutlineFacebook className='inline-flex text-4xl mr-5 hover:scale-110 text-white hover:text-orange'/>
            <AiOutlineInstagram className='inline-flex text-4xl mr-5 hover:scale-110 text-white hover:text-orange'/>
            <AiOutlineYoutube className='inline-flex text-4xl mr-5 hover:scale-110 text-white hover:text-orange'/>
            <AiOutlineSkype className='inline-flex text-4xl mr-5 hover:scale-110 text-white hover:text-orange'/>
        </div>
    </div>
  )
}

export default DropDown