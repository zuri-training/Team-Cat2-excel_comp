import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
            <div className='flex gap-4 '>
               
              <NavLink to= "/"  className={({ isActive }) =>
                isActive ? "px-4 hover:text-[#c76e29] text-[#c76e29] hover:scale-110 transition-all ease-in duration-200" : "px-4 hover:text-[#c76e29] text-[#006400] hover:scale-110 transition-all ease-in duration-200"
              }>
               Home
              </NavLink>
              <NavLink to= "/products"  className={({ isActive }) =>
                isActive ? "px-4 hover:text-[#c76e29] text-[#c76e29] hover:scale-110 transition-all ease-in duration-200" : "px-4 hover:text-[#c76e29] text-[#006400] hover:scale-110 transition-all ease-in duration-200"
              }>
               Products
              </NavLink>
              <NavLink to= "/support"  className={({ isActive }) =>
                isActive ? "px-4 hover:text-[#c76e29] text-[#c76e29] hover:scale-110 transition-all ease-in duration-200" : "px-4 hover:text-[#c76e29] text-[#006400] hover:scale-110 transition-all ease-in duration-200"
              }>
               Support
              </NavLink>
              <NavLink to= "/about"  className={({ isActive }) =>
                isActive ? "px-4 hover:text-[#c76e29] text-[#c76e29] hover:scale-110 transition-all ease-in duration-200" : "px-4 hover:text-[#c76e29] text-[#006400] hover:scale-110 transition-all ease-in duration-200"
              }>
                About Us
              </NavLink>
              <NavLink to= "/contact"  className={({ isActive }) =>
                isActive ? "px-4 hover:text-[#c76e29] text-[#c76e29] hover:scale-110 transition-all ease-in duration-200" : "px-4 hover:text-[#c76e29] text-[#006400] hover:scale-110 transition-all ease-in duration-200"
              }>
                Contact
              </NavLink>
                
            </div>
            <div className='flex flex-col relative'>

              <button onClick={()=>setDropdown(!dropdown)}>
              <AiOutlineUser className='w-[36px] h-[36px] hover:bg-gray-200 rounded-full p-2  cursor-pointer
              '/>
              </button>
              <div className={ dropdown ? 'flex flex-col px-4 py-4 text-sm gap-2 absolute w-24 rounded-md shadow-lg top-10 bg-white ease-in transition-all duration-200':' invisible px-4 py-4 text-sm gap-2 absolute w-24 rounded-md shadow-lg  bg-white top-[50px]'}>
                <Link to = "/signup">Sign Up</Link>
                <Link to = "/login">Login</Link>
              </div>
              
            </div>
           
            <RxHamburgerMenu className='hidden'/>
        </div>
      
    </div>
  )
}

export default Navbar
