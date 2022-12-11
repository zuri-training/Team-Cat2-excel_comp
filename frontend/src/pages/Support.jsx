import React from 'react'
import Navbar from '../components/Navbar'
import sheet from '../assets/image1.png'
import excel from '../assets/image3.png'
import furlan from '../assets/image2.png'
import table from '../assets/table.png'
import Footer from '../components/Footer'

const Support = () => {
    return(
        <div>
            <Navbar />

            <div className='flex flex-col justify-center items-center py-8'>
                <div className='text-center py-4 '>
                    <h1 className='font-bold text-xl text-[#006400] mb-4'>How to <span className='text-[#ea7d26]'>COMPARE</span> and <span className='text-[#ea7d26]'>DIFFERENTIATE</span> between two excel sheets</h1>
                    <p className='text-[#006400] text-lg'>Compare your excel files in <span className='text-[#ea7d26]'>FOUR</span> easy steps</p>
                    <img src='' alt="" />
                </div>
                <div className='mb-4'>
                    <h1 className='bg-[#006400] text-white py-4 px-4'>STEP 1: UPLOAD YOUR FILES</h1>
                    <img className='w-[80%]' src={sheet} alt="" />
                </div>
                <div className='mb-4'>
                    <h1 className='bg-[#ea7d26] text-white py-4 px-4'>STEP 2: CLICK ON THE "COMPARE SHEET" BUTTON</h1>
                    <img className='w-[80%]' src={excel} alt="" />
                </div>
                <div className='mb-4'>
                    <h1 className='bg-[#006400] text-white py-4 px-4'>SETP 3: SEE THE TWO COMPARED SHEETS</h1>
                    <img className='w-[80%]' src={furlan} alt="" />
                </div>
                <div mb-4>
                    <h1 className='bg-[#ea7d26] text-white py-4 px-4'>STEP 4: CLICK ON THE "DOWNLOAD" BUTTON TO EITHER <br />DOWNLOAD NOW OR SAVE FOR LATER</h1>
                    <img className='w-[80%]' src={table} alt="" />
                </div>
            </div>
           <div className='flex flex-col leading-10 justify-center items-center py-4'>
                
                <h1 className='text-[#006400] text-lg font-bold mb-4'>Frequently asked questions</h1>
                <div>
                    
                <h2 className='font-bold'> 1. What is KompareXL?</h2>
                <p>KompareXL is a platform that helps users compare the content of their Excel files.</p>

                
            
                <h2 className='font-bold'>2. Do I have to pay money to use KompareXL?</h2>
                <p>No you don’t have to pay money, KompareXL is completely free!</p>
                
            
                <h2 className='font-bold'>3. How long does it take to compare my excel documents?</h2>
                <p>It takes a couple of seconds to compare basic excel documents</p>
                
            
                <h2 className='font-bold'>4. What will be the differences between the two sheets displayed?</h2>
                <p>After your upload your files and click on “compare sheets”, your files will <br /> be displayed side by side and the duplicated cells are highlighted.</p>
                
                </div>    
           </div>
           <Footer />
        </div>
    )
}

export default Support