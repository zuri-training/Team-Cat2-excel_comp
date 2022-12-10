import React from 'react'

import Eight from '../assets/dwnl.png'
import Ten from '../assets/imageten.png'
import Compare from '../assets/lappy.png'
import Four from '../assets/imagefour.png'
import Typed from 'react-typed'
import { useState } from 'react'







const landing = () => {
  return (
    <div className='px-[80px] flex flex-col items-center mt-10 bg-gray-50 pt-20'>
      <div>
      <h1 className='font-bold text-4xl text-[#006400] mb-6 text-center'>How it Works</h1>
        <p className='text-xl font-light text-center'>With KompareXl you can save time and effort by <Typed
      className='font-bold text-xl text-[#006400]'
      strings={[
            "Uploading",
            "Comparing",
            "Duplicating",
            "Downloading",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        /> files </p>
      </div>

      <div className='flex py-[80px] text-center text-2xl font-bold mb-6 text-[#006400] justify-center'>
        <div className='mt-[280px]'>
            <h1 >Downloads</h1>
            <img src={Four} alt="/" />
        </div>
        <div className='mt-[190px] ml-[-10px]'>
            <h1>Duplicate</h1>
            <img src={Compare} alt="/" />
        </div>
        <div className='mt-[90px] ml-[-20px]'>
            <h1>Compare</h1>
            <img src={Ten} alt="/" />
        </div>
        <div className='ml-[-20px]'>
            <h1>Upload</h1>
            <img src={Eight} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default landing
