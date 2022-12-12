import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {BsFolder} from 'react-icons/bs'


const Compare = () => {
  return (
    <div className='font-manrope mt-5 pl-16'>
        <div className='flex items-center gap-2'>
            <Link to="/newtask " className='font-bold text-[#006400]'>Newtask</Link> 
            <MdOutlineKeyboardArrowRight className='text-3xl text-[#006400]'/>
            <p className='font-bold text-[#6B6E70]'>Compare</p>
        </div>
        <div className='mt-[37px]'>
        <h1 className='text-[32px] font-[900] text-[#006400] text-center'>Compare Excel Files With One Click!</h1>
        </div>
        <div className='flex justify-evenly py-[68px]'>
            <div className='border-2 p-4 rounded-lg flex flex-col w-[434px] gap-4 border-[#006400] h-[256px] text-center '>
                <BsFolder className='w-[80px] h-[80px] text-[#006400] m-auto py-4' />
                <p className='text-[#006400] pb-8'>Drop or upload excel files</p>
               
            </div>
            <div className='border-2 p-4 rounded-lg flex flex-col w-[434px] gap-4 border-[#006400] h-[256px] text-center '>
                <BsFolder className='w-[80px] h-[80px] text-[#006400] m-auto py-4' />
                <p className='text-[#006400] pb-8'>Drop or upload excel files</p>
            </div>
            
        </div>
        <div className='flex justify-evenly items-center pr-8 '>
                <div className='flex justify-center items-center gap-2'>
                    <p className='text-[#006400]'>Enter URL:___________________</p>
                    <button className='bg-[#006400] text-white py-2 px-4 rounded-lg'>Upload</button>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <p className='text-[#006400]'>Enter URL:___________________</p>
                    <button className='bg-[#006400] text-white py-2 px-4 rounded-lg'>Upload</button>
                </div>
        </div>
        <div className='flex flex-col justify-center items-center py-12'>
            <button className='bg-[#006400] text-white py-2 px-4 rounded-lg'>Compare</button>
            <p className='pt-4'>By uploading your files or using our services you agree with our <span className='text-[#006400]'>Terms of Service & Privacy Policy</span></p>
        </div>
               
      
    </div>
  )
}

export default Compare
