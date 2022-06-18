import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  return (
    <div className='flex flex-col absolute z-50 w-full'>
        <div className='inline-flex justify-between w-full'>
            <div className='inline-flex text-white m-3 justify-start'>
                <GiHamburgerMenu className='text-3xl cursor-pointer'/>
                <p className='text-xl ml-3 cursor-pointer'>MENU</p>
            </div>
            <div className='inline-flex text-white m-3 justify-end'>
                <p className='text-xl mr-3 cursor-pointer'>(123) 456-7890</p>
                <AiFillPhone className='text-3xl cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Nav