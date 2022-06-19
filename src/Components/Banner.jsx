import React from 'react';
import bannerBackground from '../img/banner-background.webp';
import { useStateContext } from '../Context/StateContext';
import Contact from './Contact';

const Banner = () => {
  const { showContact, setShowContact, setShowDropdown } = useStateContext();

  return (
    <div style={{ backgroundImage: `url('${bannerBackground}')` }} className="flex relative bg-cover bg-center w-full h-[100vh] z-0" onClick={() => setShowDropdown(false)}>
        <div className='flex flex-row w-full flex-wrap'>
            <div className='text-white self-center m-auto'>
                <h1 className='text-6xl xl:text-9xl text-center'>HelpTech</h1>
                <p className='xl:text-2xl opacity-50 text-center mt-5'>We'll keep your computer running like new.</p>
            </div>
            <div className='text-white m-auto xl:mb-32 xl:ml-3'>
                <h2 className='bg-orange text-4xl py-5 px-10 cursor-pointer hover:scale-110 rounded' onClick={() => setShowContact(true)}>Contact Now!</h2>
            </div>
        </div>
      {showContact && <Contact/>}
    </div>
  )
}

export default Banner