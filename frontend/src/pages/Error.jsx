import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import error from '../assets/404.png'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-evenly items-center py-8'>
            <div>
                <h1 className='font-bold text-[#006400] text-xl mb-4'>Oops! Something went wrong!</h1>
                <p>This is awkward! Our site is under construction or you entered <br />a wrong URL. Either way, our site is still a delightful means for <br />excel comparison.</p>
                <Link to='/'>
                    <div>
                    <button className='bg-[#006400] text-white py-2 px-4 rounded-lg mt-8'>Go Back to Home Page</button>
                    </div>
                </Link>
               
               
            </div>
            <div>
                <img src={error} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Error
