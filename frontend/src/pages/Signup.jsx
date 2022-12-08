import React from 'react'
import Navbar from '../components/Navbar'
import Sign from '../assets/signupimg.png'
import {FcGoogle} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { useState } from 'react'


const Signup = () => {
const [showpassword, setShowPassword] = useState(false)

  return (
    <div>
      <Navbar/>
      <div className='flex justify-evenly items-center py-14 font-manrope'>
        <div>
        <img className='w-[500px]' src={Sign} alt="" />
        </div>
        <div className='ml-8'>
        <form>
          <h2 className='text-4xl mb-4'>Sign Up</h2>
          <div className='flex items-center border-2 px-8 py-2 w-[500px] h-[50px] mb-4'>
            <FcGoogle />
            <p className='ml-4 text-center'>Sign up with Google</p>
          </div>
          <div className='mb-7'>
            <h2>Full Name</h2>
            <input className='border-2  px-8 py-2 w-[500px] h-[50px]' type="text" placeholder='Peter Roberts'/>
          </div>
          <div className='mb-7'>
            <h2>Email Address</h2>
          
            <input className='border-2  px-8 py-2 w-[500px] h-[50px]' type="email" placeholder='example@gmail.com' />
          </div>
          <div className='mb-7'>
            <h2>Password</h2>
            <div className=' w-[500px] h-[50px] flex items-center relative'>
             <input className='border-2  h-[50px] pl-8 w-[100%]' type={showpassword ?"text":"password"} placeholder='**********' />
             {showpassword ?<AiFillEyeInvisible className='w-[10%] absolute right-4 cursor-pointer' onClick={()=>setShowPassword(!showpassword)} /> : <AiFillEye className='w-[10%] absolute right-4 cursor-pointer' onClick={()=>setShowPassword(!showpassword)} /> }
            </div>
            
          </div>
          <div className='mb-7'>
            <h2>Confirm Password</h2>
            <div className=' w-[500px] h-[50px] flex items-center relative'>
             <input className='border-2  h-[50px] pl-8 w-[100%]' type={showpassword ?"text":"password"} placeholder='**********' />
             {showpassword ?<AiFillEyeInvisible className='w-[10%] absolute right-4 cursor-pointer' onClick={()=>setShowPassword(!showpassword)} /> : <AiFillEye className='w-[10%] absolute right-4 cursor-pointer' onClick={()=>setShowPassword(!showpassword)} /> }
            </div>
            
          </div>
        </form>
        <div className='mb-4'>
          <button className='bg-[#006400]  w-[500px] h-[50px] text-white mt-[53px]'>Create Account</button>
          <p className='text-center mt-6'>Already have an account? 
          <Link to='/login' className='underline'>
          Log in
          </Link> 
          
          </p>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Signup
