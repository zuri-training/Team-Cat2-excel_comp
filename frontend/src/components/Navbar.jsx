import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

const[dropdown,setDropdown] = useState(false)


  return (
    <div className='flex justify-between items-center h-20 px-20 font-manrope border-b  border-[#006400]'>
      <Link to="/">
        <div>
            <img src={Logo}  />
        </div>
        </Link>
        
        <div className='flex items-center px-4 gap-6 '>
            <ul className='flex gap-4 '>
                <li className='px-4 text-[#c76e29] rounded-md'>Home</li>
                <li className='px-4 hover:text-[#c76e29] text-[#006400] rounded-md'>Products</li>
                <li className='px-4 hover:text-[#c76e29] text-[#006400] rounded-md'>Support</li>
                <li className='px-4 hover:text-[#c76e29] text-[#006400] rounded-md'>About</li>
                <li className='px-4 hover:text-[#c76e29] text-[#006400] rounded-md'>Contact Us</li>
            </ul>
            <div className='flex flex-col relative'>

              <button onClick={()=>setDropdown(!dropdown)}>
              <AiOutlineUser className='w-[36px] h-[36px] hover:bg-gray-200 rounded-full p-2  cursor-pointer
              '/>
              </button>
              <div className={ dropdown ? 'flex flex-col px-4 py-4 text-sm gap-2 absolute w-24 rounded-md shadow-lg top-10 bg-white ease-in transition-all duration-200':' invisible px-4 py-4 text-sm gap-2 absolute w-24 rounded-md shadow-lg  bg-white top-[50px]'}>
                <Link to = "/signup">Sign Up</Link>
                <Link to = "/signup">Login</Link>
              </div>
              
            </div>
           
            <RxHamburgerMenu className='hidden'/>
        </div>
      
    </div>
  )
}

export default Navbar
