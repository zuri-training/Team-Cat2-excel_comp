import React from 'react'
import Dashboardss from '../../components/Dashboardss'
import Navbar from '../../components/Navbar'
import {RxDashboard} from 'react-icons/rx'
import {MdTask, MdOutlineSettings, MdSubscriptions} from 'react-icons/md'
import {RiFolderTransferFill, RiFolderHistoryFill} from 'react-icons/ri'
import {BiLogOutCircle} from 'react-icons/bi'
import {HiUser} from 'react-icons/hi'
import { NavLink,Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const Account = () => {
  return (
    <div>
    <Navbar />
    <div className='flex gap-4'>
        <div className='font-manrope py-4 w-[14%] '>
            <div className='py-8 px-4 border border-[#006400] rounded-[5px] ml-2'>
                <div className='flex items-center gap-4'>
                    <RxDashboard className='mb-8' />
                    < p className='mb-8'>Dashboard</ p>
                </div>
                <div  className='flex items-center gap-4'>
                    <MdTask className='mb-8'/>
                    < p className='mb-8'>New Task</ p>
                </div>
                <div  className='flex items-center gap-4'>
                    <RiFolderTransferFill className='mb-8'/>
                    < p className='mb-8'>Recent Sheets</ p>
                </div>
                <div  className='flex items-center gap-4'>
                    <MdOutlineSettings className='mb-8'/>
                    < p className='mb-8'>Settings</ p>
                </div>
                <div  className='flex items-center gap-4'>
                    <MdSubscriptions className='mb-8'/>
                    < p className='mb-8'>Subscription</ p>
                </div>
                <div  className='flex items-center gap-4'>
                    <RiFolderHistoryFill className='mb-8'/>
                    < p className='mb-8'>History</ p>
                </div>
                <div  className='flex items-center gap-4'>
                    <HiUser className='mb-8'/>
                    < p className='mb-8'>Profile</p>
                </div>
                
                
                <div  className='flex items-center gap-4 mt-32'>
                    <BiLogOutCircle/>
                    <p className=''>Log out</p>
                </div>
            
            </div>
        </div>
        <div className="w-[86%]">
            <Outlet />
        </div>
    
    </div>
    <Footer/>
  </div>
  )
}

export default Account
