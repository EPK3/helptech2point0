import React from 'react';
import Contact from './Contact';
import service from '../img/service.webp';
import phoneDesk from '../img/phone-desk.webp';
import laptopDesk from '../img/laptop-desk.webp'
import handPhone from '../img/hand_phone.webp';
import tablet from '../img/tablet.webp';
import laptop from '../img/laptop.webp';
import bottomBanner from '../img/bottom-banner.webp';
import { useStateContext } from '../Context/StateContext';

const Content = () => {
  const { showContact, setShowContact, setShowDropdown } = useStateContext();

  return (
    <div onClick={() => setShowDropdown(false)}>
        <div className='flex flex-wrap bg-light-grey p-28 justify-center'>
            <div className='flex flex-1 m-auto justify-center md:mx-5'>
                <img src={service} alt='Something went wrong...' className='min-w-[350px]'/>
            </div>
            <div className='flex-1 text-center m-auto my-10 md:mx-5'>
                <h1 className='text-4xl xl:text-6xl text-black'>Southeastern PA's</h1>
                <h1 className='text-8xl lg:text-6xl text-orange font-bold'>Best Choice</h1>
                <h1 className='text-3xl xl:text-4xl text-black my-3'>For Your Computer Repair and IT Needs!</h1>
                <h2 className='text-xl xl:text-2xl xl:m-11'>Our IT Professionals can set up your new computer, phone or tablet, and diagnose and repair any problems that arise. Now serving all of Bucks and Montgomery County.</h2>
            </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='inline-flex flex-wrap flex-1'>
            <div className='flex-1 min-w-[350px]'>
              <img src={phoneDesk} alt='Something went wrong...'/>
            </div>
            <div className='flex-col flex-1 bg-slate p-10 min-w-[350px] md:min-h-[500px] lg:min-h-0'>
              <h1 className='text-orange text-2xl'>Repair Your Device</h1>
              <h2 className='my-5 text-4xl text-white font-semibold'>Fast & Reliable Repairs</h2>
              <p className='my-5 text-xl text-white'>When your phone, tablet, or laptop breaks you want an expert to handle the repair. That’s where we come in. With over a decade of experience in the electronics repair industry, HelpTech can get the job done quickly and effectively.</p>
              <p className='my-5 text-lg text-orange cursor-pointer'>more...</p>
            </div>
          </div>
          <div className='inline-flex flex-wrap flex-1'>
            <div className='flex-1 min-w-[350px]'>
              <img src={laptopDesk} alt='Something went wrong...' className='flex-1 min-w-[350px]'/>
            </div>
            <div className='flex-col flex-1 bg-slate p-10 min-w-[350px] md:min-h-[500px] lg:min-h-0'>
              <h1 className='text-orange text-2xl'>Sell Your Device</h1>
              <h2 className='my-5 text-4xl text-white font-semibold'>Buy, Sell, Trade</h2>
              <p className='my-5 text-xl text-white'>Do you have a phone graveyard in your junk drawer? An old tablet, e-reader, or music player that’s just taking up your valuable storage space? We are here to help you turn those old devices into cash on the spot!</p>
              <p className='my-5 text-lg text-orange cursor-pointer'>more...</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col m-auto justify-center my-28'>
          <h1 className='text-center text-black text-xl xl:text-4xl mx-5'>When your phone, tablet, or laptop breaks you want an expert to handle the repair.</h1>
          <h1 className='text-center text-orange text-3xl xl:text-8xl m-5'>That's where we come in.</h1>
          <div className='flex flex-wrap justify-center'>
            <img src={handPhone} alt='Something went wrong...' className='bg-grey rounded-full xl:w-[400px] xl:h-[400px] w-[350px] h-[350px] m-5 xl:m-12'/>
            <img src={tablet} alt='Something went wrong...' className='bg-grey rounded-full xl:w-[400px] xl:h-[400px] h-[350px] m-5 xl:m-12'/>
            <img src={laptop} alt='Something went wrong...' className='bg-grey rounded-full xl:w-[400px] xl:h-[400px] h-[350px] m-5 xl:m-12'/>
          </div>
        </div>
        <div style={{ backgroundImage: `url('${bottomBanner}')` }}className="flex bg-cover bg-center w-full h-auto z-0">
          <div className='flex flex-col border-2 border-white m-auto my-28 w-[300px] md:w-[50%] justify-center text-center'>
            <h1 className='text-orange text-2xl md:text-4xl xl:text-6xl mt-5 xl:mt-12'>Getting help is easy!</h1>
            <h2 className='text-white md:text-lg xl:text-xl m-5 xl:m-12 '>Your gadgets play a major role in your professional, personal and school life. When your phone, tablet, or laptop breaks you want an expert to handle the repair. That’s where we come in.</h2>
            <h2 className='text-white md:text-xl xl:text-2xl m-5'>Contact HelpTech today for all your PC and Phone repair needs.</h2>
            <div className='text-white my-5 xl:mb-12 mx-auto'>
                <h2 className='bg-orange xl:text-2xl py-5 px-10 cursor-pointer rounded' onClick={() => setShowContact(true)}>Contact Now</h2>
            </div>
          </div>
        </div>
        {showContact && <Contact/>}
    </div>
  )
}

export default Content