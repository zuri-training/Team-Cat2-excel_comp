import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


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
      
    </div>
  )
}

export default Compare
