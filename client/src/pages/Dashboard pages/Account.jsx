import React from 'react'
import Dashboardss from '../../components/Dashboardss'
import Navbar from '../../components/Navbar'
import {RxDashboard} from 'react-icons/rx'
import {MdTask, MdOutlineSettings, MdSubscriptions} from 'react-icons/md'
import {RiFolderTransferFill, RiFolderHistoryFill} from 'react-icons/ri'
import {BiLogOutCircle} from 'react-icons/bi'
import {HiUser} from 'react-icons/hi'
import { NavLink,Outlet,Link} from 'react-router-dom'
import Footer from '../../components/Footer'

const Account = () => {
  return (
    <div>
    <Navbar />
    <div className='flex gap-4'>
        <div className='font-manrope py-4 w-[14%] '>
            <div className='py-8 px-4 border border-[#006400] rounded-[5px] ml-2'>
                <Link to='/account/dashboard'>
                <div className='flex items-center gap-4  cursor-pointer py-4 mb-4 '>
                    <RxDashboard  />
                    < p >Dashboard</ p>
                </div>
                </Link>
                <Link to='/account/newtask/duplicate'>
                    <div  className='flex items-center gap-4 cursor-pointer py-4 mb-4'>
                    <MdTask />
                    < p >New Task</ p>
                    </div>
                </Link>
                <Link to='/account/newtask/compare'>
                    <div  className='flex items-center gap-4 cursor-pointer py-4 mb-4'>
                    <RiFolderTransferFill />
                    < p >Recent Sheets</ p>
                    </div>
                </Link>
                
                <div  className='flex items-center gap-4 cursor-pointer py-4 mb-4'>
                    <MdOutlineSettings />
                    < p >Settings</ p>
                </div>
                <div  className='flex items-center gap-4 cursor-pointer py-4 mb-4'>
                    <MdSubscriptions />
                    < p >Subscription</ p>
                </div>
                <div  className='flex items-center gap-4 cursor-pointer py-4 mb-4'>
                    <RiFolderHistoryFill />
                    < p >History</ p>
                </div>
                <Link to='/account/profile'>
                    <div  className='flex items-center gap-4 cursor-pointer py-4 mb-4'>
                    <HiUser />
                    < p >Profile</p>
                    </div>
                </Link>
               
                
                
                <div  className='flex items-center gap-4 cursor-pointer py-4 mb-4 mt-32'>
                    <BiLogOutCircle/>
                    <p className=''>Log out</p>
                </div>
            
            </div>
        </div>
        <div className="w-[86%]">
            <Outlet />
        </div>
    
    </div>
  
  </div>
  )
}

export default Account
