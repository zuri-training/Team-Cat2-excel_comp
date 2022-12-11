import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'
import button from '../../assets/btn.png'
import {BsFunnel} from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {HiOutlineUpload} from 'react-icons/hi'
import scroll from '../../assets/scroll.png'

const Duplicate = () => {
  return (
    <div  className='font-manrope mt-5 pl-16'>
        <div className='flex items-center gap-2'>
            <Link to="/newtask " className='font-bold text-[#006400]'>Newtask</Link> 
            <MdOutlineKeyboardArrowRight className='text-3xl text-[#006400]'/>
            <p className='font-bold text-[#6B6E70]'>Duplicate</p>
        </div>
        <div className='border-2 p-2 h-[156px] w-[1000px] flex justify-between px-4 items-center'>
            <div className='flex gap-2'>
              <img src={button} alt="" />
              <input className='border-2 h-[58px] w-[320px] rounded-lg' type="text" />
              <BsFunnel className='w-[56px] h-[58px] bg-[#d3d3d4] p-4'/>
            </div>
            <div className='flex justify-center item-center gap-2'>
              <button className='bg-[#d3d3d4] py-2 px-4 rounded-lg'>Highlight </button>
              <button className='bg-[#006400] py-2 px-4 rounded-lg text-white'>Download</button>
              <HiOutlineUpload className='text-[#006400] mt-4' />
            </div>
        </div>
        <div>
            <img className='w-[1002px]' src={scroll} alt="" />
        </div>
      
    </div>
  )
}

export default Duplicate
