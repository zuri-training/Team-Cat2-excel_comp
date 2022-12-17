import React from 'react'
import Navbar from '../components/Navbar'
import Pass from '../assets/password.png'

const Login = () => {
  return (
    <div>
      <Navbar />
        <div className='flex justify-evenly items-center font-manrope py-4'>
            <div>
            <img className='w-[500px]' src={Pass} alt="" />
            </div>
            <div>
                <div>
                <h1 className='text-4xl mb-4'>Forgot Password?</h1>
                <p className='mb-8 text-sm'>Please input your email to reset your account</p>
                </div>
                <div>
                <h1 className='text-lg'>Email</h1>
                <input className='border-2  px-8 py-2 w-[500px] h-[50px] placeholder:text-xs' type="email" placeholder='example@gmail.com'/>
       
                </div>
                <div>
                <button className='bg-[#006400]  w-[500px] h-[50px] text-white mt-[53px]'>Reset Password</button>
                </div>
            </div>
            
            
        </div>
     
    </div>
  )
}

export default Login