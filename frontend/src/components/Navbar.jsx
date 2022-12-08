import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-20 font-manrope border-b  border-[#006400]'>
        <div>
            <img src={Logo}  />
        </div>
        <div className='flex items-center px-4 gap-6 '>
            <ul className='flex gap-4 '>
                <li className='px-4 text-[#c76e29] rounded-md'>Home</li>
                <li className='px-4 hover:bg-[#c76e29] text-[#006400] rounded-md'>Products</li>
                <li className='px-4 hover:bg-[#c76e29] text-[#006400] rounded-md'>Support</li>
                <li className='px-4 hover:bg-[#c76e29] text-[#006400] rounded-md'>About</li>
                <li className='px-4 hover:bg-[#c76e29] text-[#006400] rounded-md'>Contact Us</li>
            </ul>
            <AiOutlineUser className='w-[24px] h-[24px] hover:bg-[#c76e29] rounded-lg '/>
            <RxHamburgerMenu className='hidden'/>
        </div>
      
    </div>
  )
}

export default Navbar
