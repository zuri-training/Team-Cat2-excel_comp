import React from 'react'
import Kompt from '../assets/KompareXL.png'
import Ko from '../assets/komparethr.png'
import Navbar from '../components/Navbar'
import Sco from '../assets/scogen.png'
import Kom from '../assets/kompare.png'
import Footer from '../components/Footer'

const Products = () => {
  return (
    <div>
      <Navbar />

      <div className='py-[46px]'>
        <div>
        <div className='border flex justify-between items-center h-[120px] mr-[50px] ml-[50px] border-[#006400] pr-[160px] pl-[160px] font-manrope text-center py-[81px]'>
            <div className='flex gap-[30px] items-center'>
            <img src={Ko} alt="/" />
            <img src={Kompt} alt="" />
            </div>
            
            <h1 className='text-[22px]'>Compare excel files faster and more <br />efficently, no matter your level of experience</h1>
        </div>
        <div  className='border flex justify-between items-center h-[120px] mr-[50px] ml-[50px] border-[#006400] pr-[160px] pl-[160px] text-center py-[91px] mt-4'>
        <div className='flex gap-[30px] items-center'>
            <img src={Kom} alt="" />
            <img src={Sco} alt="" />
        </div>
        <h1 className='text-[22px]'>Create high quality sales copy in minutes <br />and improve your search engine ranking. <br />Get started today and boost your <br />business's success online.</h1>
        </div>
       
      </div>
        </div>
        <div className='mt-[200px]'>
            <Footer />
        </div>
    </div>
  )
}

export default Products
