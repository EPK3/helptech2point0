import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineSkype, AiOutlineCopyright } from 'react-icons/ai';
import logo from '../img/logo-main.webp';

const Footer = () => {
  return (
    <div className='flex bg-black align-middle text-4xl text-white justify-center md:justify-between m-auto'>
        <div className='hidden md:inline-flex mx-5'>
            <AiOutlineCopyright className='my-auto mx-1 text-lg'/>
            <p className='text-lg m-auto'>HelpTech 2022</p>
        </div>
        <div className='hidden md:inline-flex mx-5'>
            <img src={logo} alt='Something went wrong...' className='w-48 m-5'/>
        </div>
        <div className='inline-flex m-5'>
            <AiOutlineFacebook className='my-auto mx-5 md:mx-1 cursor-pointer hover:text-orange hover:scale-110'/>
            <AiOutlineInstagram className='my-auto mx-5 md:mx-1 cursor-pointer hover:text-orange hover:scale-110'/>
            <AiOutlineYoutube className='my-auto mx-5 md:mx-1 cursor-pointer hover:text-orange hover:scale-110'/>
            <AiOutlineSkype className='my-auto mx-5 md:mx-1 cursor-pointer hover:text-orange hover:scale-110'/>
        </div>
    </div>
  )
}

export default Footer