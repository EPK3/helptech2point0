import React from 'react';
import service from '../img/service.webp';

const Content = () => {
  return (
    <div className='bg-light-grey'>
        <div className='flex flex-wrap p-28 justify-center'>
            <div className='flex flex-1 m-auto justify-center'>
                <img src={service} alt='Something went wrong...' className='min-w-[350px]'/>
            </div>
            <div className='flex-1 text-center m-auto my-10'>
                <h1 className='text-4xl xl:text-6xl text-black'>Southeastern PA's</h1>
                <h1 className='text-8xl text-orange font-bold'>Best Choice</h1>
                <h1 className='text-3xl xl:text-4xl text-black my-3'>For Your Computer Repair and IT Needs!</h1>
                <h2 className='text-xl xl:text-2xl xl:m-11'>Our IT Professionals can set up your new computer, phone or tablet, and diagnose and repair any problems that arise. Now serving all of Bucks and Montgomery County.</h2>
            </div>
        </div>
    </div>
  )
}

export default Content