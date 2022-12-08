import React from 'react'
import Heroim from '../assets/heroimage.png'

const Hero = () => {
  return (
    <div className='flex items-center py-[120px] justify-between px-[80px]'>
      <div className='leading-[30px] '>
        <h1 className='font-bold text-4xl text-[#006400] mb-6'>Let's make working with large excel <br />files easier for you like a treat.</h1>
        <p className='text-2xl font-medium mb-6'>Compare excel files faster and more <br />efficently, no matter your experience level.</p>
        <button className='bg-[#006400] hover:bg-[#0c5f0c] text-white py-[10px] px-[17px] rounded-[5px] mt-8'>GET STARTED</button>
      </div>

      <div>
            <img src={Heroim} />
      </div>
    </div>
  )
}

export default Hero
