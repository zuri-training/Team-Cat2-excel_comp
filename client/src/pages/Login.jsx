import React from 'react'
import Img from '../assets/group18.png'
import Navbar from '../components/Navbar'
import { FcGoogle } from 'react-icons/fc'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const [showpassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [loggingin, setLoggingin] = useState(false)

  const navigate = useNavigate()


const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate("/account/dashboard");

    try {
      const res = await fetch('http://localhost/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'content-Type': 'application/json' }
      })
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar />

      <div className='flex justify-evenly items-center py-14 font-manrope'>
        <div>
          <img className='w-[500px]' src={Img} alt="/" />
        </div>
        <div>
          <div>
            <h1 className='text-4xl mb-4'>Welcome Back</h1>
            <p className='text-xs mb-4'>Login to your Dashboard</p>
          </div>
          <div className='flex items-center border-2 px-8 py-2 w-[500px] h-[50px] mb-4'>
            <FcGoogle />
            <p className='ml-4 text-center cursor-pointer'>Login with Google</p>
          </div>

          {/* 
          <div className='mb-7'>
            <h2>Email Address</h2>
          
            <input className='border-2  px-8 py-2 w-[500px] h-[50px] placeholder:text-xs' type="email" placeholder='example@gmail.com' />
          </div>
          <div className='mb-7'>
                  <h2>Password</h2>
              <div className=' w-[500px] h-[50px] flex items-center relative'>
                  <input className='border-2  h-[50px] pl-8 w-[100%]' type={showpassword ?"text":"password"} placeholder='**********' />
                  {showpassword ? <AiFillEyeInvisible className='w-[10%] absolute right-4 cursor-pointer' onClick={()=>setShowPassword(!showpassword)} /> : <AiFillEye className='w-[10%] absolute right-4 cursor-pointer' onClick={()=>setShowPassword(!showpassword)} /> }
              </div>
              <div className='mb-4'>
                
                <button className='bg-[#006400]  w-[500px] h-[50px] text-white mt-[53px]'>Create Account</button>
                <p className='text-center mt-6'>Forgot Password? 
                <Link to='/password' className='underline text-[#006400] ml-2'>
                Reset Password
                </Link> </p>
              </div>
            </div>
 */}




          <form onSubmit={handleSubmit}>
            <div className='mb-7 flex flex-col'>
              <label>Email Address</label>

              <input className='border-2  px-8 py-2 w-[500px] h-[50px] placeholder:text-xs' type="email" placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='mb-7'>
              <label>Password</label>
              <div className=' w-[500px] h-[50px] flex items-center relative'>
                <input className='border-2  h-[50px] pl-8 w-[100%]' type={showpassword ? "text" : "password"} placeholder='**********' value={password} onChange={(e) => setPassword(e.target.value)} required />
                {showpassword ? <AiFillEyeInvisible className='w-[10%] absolute right-4 cursor-pointer' onClick={() => setShowPassword(!showpassword)} /> : <AiFillEye className='w-[10%] absolute right-4 cursor-pointer' onClick={() => setShowPassword(!showpassword)} />}
              </div>
              <div className='mb-4'>

                <button className='bg-[#006400]  w-[500px] h-[50px] text-white mt-[53px]' type='submit'>Create Account</button>
                <p className='text-center mt-6'>Forgot Password?
                  <Link to='/password' className='underline text-[#006400] ml-2'>
                    Reset Password
                  </Link> </p>
              </div>
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Login

