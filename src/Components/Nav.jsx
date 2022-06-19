import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import DropDown from './DropDown';
import { useStateContext } from '../Context/StateContext';

const Nav = () => {
  const { showDropdown, setShowDropdown } = useStateContext();

  return (
    <div className='flex flex-col absolute z-20 w-full'>
        <div className='inline-flex justify-between w-full'>
            <div className='inline-flex text-white m-5 justify-start'>
                <GiHamburgerMenu className='text-3xl cursor-pointer' onClick={() => setShowDropdown(true)}/>
                <p className='text-xl ml-3 cursor-pointer' onClick={() => setShowDropdown(true)}>MENU</p>
            </div>
            <div className='inline-flex text-white m-5 justify-end'>
                <p className='text-xl mr-3 cursor-pointer'>(123) 456-7890</p>
                <AiFillPhone className='text-3xl cursor-pointer'/>
            </div>
        </div>
        {showDropdown && <DropDown/>}
    </div>
  )
}

export default Nav