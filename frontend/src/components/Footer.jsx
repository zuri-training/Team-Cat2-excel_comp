import React from 'react'

const Footer = () => {
  return (
    <div className='h-[235px] border-t  border-[#006400] flex flex-col justify-center items-center text-center text-[#006400] '>
      
      <h1 className='font-medium text-3xl mb-4'>Want news and insights from KompareXL?</h1>
        <p className='font-bold mb-2'>Send me a newsletter about industry trends plus news of KompareXL products and services.</p>
        <div className='my-4'>
         <input className='border border-[#006400] py-2 px-4 placeholder:italic placeholder:text-[#00640060]' type="text" placeholder='Enter your email address ...' />
         <button className='bg-[#bf590a] border border-[#bf590a] text-white py-2 px-4 rounded-[5px] ml-[-4px]'>Join Now</button>
        </div>
       
        <div className='mb-2'>
        <ul className='flex gap-8'>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Accessibility</li>
                <li>Resources</li>
                <li>RSS</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
        </div>
        
        <div>
         <p>© Copyright KompareXL.com 2022. All rights reserved. All other trademarks and copyrights are property of their respective owners.</p>
        </div>

          
           
        
        
    
    </div>
  )
}

export default Footer
