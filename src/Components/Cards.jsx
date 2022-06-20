import React from 'react'
import { AiOutlineTool, AiOutlineWifi, AiOutlineWarning, AiOutlineLaptop } from 'react-icons/ai'
import { useStateContext } from '../Context/StateContext';

const Cards = () => {
    const { setShowDropdown } = useStateContext();

  return (
    <div className='flex flex-wrap justify-center m-auto my-28' onClick={() => setShowDropdown(false)}>
        <div className='border border-slate mx-8 2xl:mx-12 my-5 w-[350px] h-[500px] shadow-md rounded'>
            <div className='m-[50px]'>
                <AiOutlineTool className='bg-orange border-2 border-white rounded-full p-3 text-white text-9xl m-auto'/>
            </div>
            <div className='m-[30px]'>
                <h3 className='text-black text-xl font-bold text-center'>Diagnosis & Repair</h3>
                <div className='border-b m-5 border-grey'></div>
                <p className='text-center text-slate text-lg my-5'>Is your computer or tablet broken, or won't start? Our repair experts at HelpTech will diagnose what's wrong and make all necessary repairs.</p>
            </div>
        </div>
        <div className='border border-slate mx-8 2xl:mx-12 my-5 w-[350px] h-[500px] shadow-md rounded'>
            <div className='m-[50px]'>
                <AiOutlineWarning className='bg-orange border-2 border-white rounded-full p-3 text-white text-9xl m-auto'/>
            </div>
            <div className='m-[30px]'>
                <h3 className='text-black text-xl font-bold text-center'>Virus & Spyware Removal</h3>
                <div className='border-b m-5 border-grey'></div>
                <p className='text-center text-slate text-lg my-5'>Computer programs running slowly? Seeing unwanted ads and pop-up windows? Your device may be infected with viruses or spyware.</p>
            </div>
        </div>
        <div className='border border-slate mx-8 2xl:mx-12 my-5 w-[350px] h-[500px] shadow-md rounded'>
            <div className='m-[50px]'>
                <AiOutlineWifi className='bg-orange border-2 border-white rounded-full p-3 text-white text-9xl m-auto'/>
            </div>
            <div className='m-[30px]'>
                <h3 className='text-black text-xl font-bold text-center'>Home Wi-Fi Setup</h3>
                <div className='border-b m-5 border-grey'></div>
                <p className='text-center text-slate text-lg my-5'>Need Wi-Fi at your new home? Or maybe your current internet and streaming services are running slowly? We can diagnose issues and do what's necessary to give you a faster wireless network.</p>
            </div>
        </div>
        <div className='border border-slate mx-8 2xl:mx-12 my-5 w-[350px] h-[500px] shadow-md rounded'>
            <div className='m-[50px]'>
                <AiOutlineLaptop className='bg-orange border-2 border-white rounded-full p-3 text-white text-9xl m-auto'/>
            </div>
            <div className='m-[30px]'>
                <h3 className='text-black text-2xl font-bold text-center'>Device Setup</h3>
                <div className='border-b m-5 border-grey'></div>
                <p className='text-center text-slate text-lg my-5'>Get started the right way. We'll set up a new device, including a PC, tablet, mobile or networkable device, or up to five wireless devices.</p>
            </div>
        </div>
    </div>
  )
}

export default Cards