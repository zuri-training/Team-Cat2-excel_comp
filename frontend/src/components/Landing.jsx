import React from 'react'

import Eight from '../assets/imageight.png'
import Ten from '../assets/imageten.png'
import Compare from '../assets/laptop.png'
import Four from '../assets/imagefour.png'







const landing = () => {
  return (
    <div className='px-[80px]'>
      <div>
        <p className='text-2xl font-medium mb-6'>Avoid spending time and effort on <br />manually duplicating of files to avoid <br />overwriting and losing datas <br />with the help of KompareXL</p>
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
