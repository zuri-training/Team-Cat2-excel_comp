import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdMail} from 'react-icons/md'
import {FaFacebook} from 'react-icons/fa'
import content from '../assets/content.png'

const Contact = () => {
  return (
    <div className='font-manrope '>
      <Navbar />
     
      <div className='px-4 py-8 mx-auto container min-w-[700px]' >
        <h1 className='font-bold text-[#006400] text-lg mb-2'>Contact Us</h1>
        <div className='border-2 p-4 border-[#006400]'>
          <form className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="">Full Name</label>
              <input className='border-2 w-[50%] ' type="text"/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Email</label>
              <input  className='border-2 w-[50%]' type="Email" />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Subject</label>
              <input className='border-2 w-[50%]' type="text" />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Message</label>
              <textarea className='border-2 mt-4 w-[60%]' name="freeform" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
            <button className='py-2 px-4 bg-[#006400] text-white rounded-lg'>Submit</button>
            </div>
          </form>
          
        </div>
        <div className='border-2 p-4 border-[#006400] mt-4 '>
              <div className='flex gap-4'>
                <BsTelephoneFill/>
                <p>+ 234 70 ******</p>
              </div>
              <div className='flex gap-4'>
                <MdMail />
                <p>Sipport@kompareXL.com</p>
              </div>
              <div className='flex gap-4'>
                <FaFacebook/>
                <p>KompareXL</p>
              </div>
          </div>
      </div>
      <div className='flex justify-center items-center py-4'>
        <img src={content} alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
