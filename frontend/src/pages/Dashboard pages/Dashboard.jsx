import React from 'react'
import Dashboardss from '../../components/Dashboardss'
import {AiOutlineCloudUpload} from 'react-icons/ai'


const Dashboard = () => {
  return (
    <div className='font-manrope pr-10 pb-[42px]'>
    

      <div className='flex flex-col '>
        <div className='flex justify-between pl-16 pt-4  items-center'>
            <h1 className='text-[32px] font-[900] text-[#006400]'>OVERVIEW</h1>
            <div className='border border-[#006400] rounded-md flex items-center w-[376px] justify-between px-5 h-10'>
              <input type="text" className='w-[80%]'/><button className='text-[16px] text-[#006400]'>Search</button>
            </div>
           
        </div>
        <div className=' flex flex-col w-full border border-dashed mt-5 border-[#006400] items-center pt-[28px] pb-[70px] rounded-md '>
            <p className='text-[#006400]'>What would you like to do today?</p>
            <div className='flex gap-[70px] mt-[37px]'>
                <button className='bg-[#BF590A] py-3 px-4 text-white rounded-md text-[14px]'>Compare</button>
                <button className='bg-[#006400] py-3 px-4 text-white rounded-md text-[14px]'>Duplicate</button>
            </div>
            <div className='flex items-center gap-2 mt-[24px]'>
                <AiOutlineCloudUpload />
                <p>Drag and drop or Upload your Excel files</p>
            </div>
        </div>
        <div className='mb-4 pl-16 mt-8'>
        <h1 className='text-[24px] font-[900] text-[#006400]'>Work History</h1>
        </div>

        <div className='flex'>
          <div className='border-2 p-4 rounded-lg flex w-[80%] gap-4'>
            
            <div className='flex flex-col items-center border-[3px] border-[#BF590A] rounded-md pt-[11px] pb-[83px] w-[25%]'>
              <h4 className='font-[800] text-[18px] text-[#006400]'>Task Name</h4>
              <p className='text-[17px] bg-[#006400] w-full text-center text-white py-1 mt-9'>Code 101</p>
              <p className='text-[17px] bg-[#006400] w-full text-center text-white py-1 mt-2'>Code 101</p>
            </div>


            <div className='flex flex-col items-center border-[3px] border-[#BF590A] rounded-md pt-[11px] pb-[83px] w-[25%]'>
              <h4 className='font-[800] text-[18px] text-[#006400]'>Task Name</h4>
              <p className='text-[17px] bg-[#006400] w-full text-center text-white py-1 mt-9'>Code 101</p>
              <p className='text-[17px] bg-[#006400] w-full text-center text-white py-1 mt-2'>Code 101</p>
            </div>


            <div className='flex flex-col items-center border-[3px] border-[#BF590A] rounded-md pt-[11px] pb-[83px] w-[25%]'>
              <h4 className='font-[800] text-[18px] text-[#006400]'>Task Name</h4>
              <p className='text-[17px] bg-[#006400] w-full text-center text-white py-1 mt-9'>Code 101</p>
              <p className='text-[17px] bg-[#006400] w-full text-center text-white py-1 mt-2'>Code 101</p>
            </div>

            <div className='flex flex-col items-center border-[3px] border-[#BF590A] rounded-md pt-[11px] pb-[83px] w-[25%]'>
              <h4 className='font-[800] text-[18px] text-[#006400]'>Task Name</h4>
              <p className='text-[17px] bg-[#006400] w-full text-center text-white py-1 mt-9'>Code 101</p>
              <p className='text-[17px] bg-[#006400] w-full text-center text-white py-1 mt-2'>Code 101</p>
            </div>
          </div>
          <div>

          </div>
        </div>
       
      </div>

    </div>
  )
}

export default Dashboard

