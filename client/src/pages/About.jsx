import React from 'react'
import Thirty from '../assets/rect.png'
import Navbar from '../components/Navbar'
import { MdCompareArrows, MdFileDownload } from 'react-icons/md'
import {HiDocumentDuplicate} from 'react-icons/hi'
import {GiSaveArrow} from 'react-icons/gi'
import {FaFileDownload} from 'react-icons/fa'
import {BiHighlight} from 'react-icons/bi'
import Footer from '../components/Footer'








const About = () => {
  return (
    <div>
        <Navbar />
        <div  className='font-manrope'>
            <div className='flex justify-evenly items-center p-[70px]'>
            <div className='mt-8'>
                <img src={Thirty} alt="/" />
            </div>
            <div>
                <div className='mb-12  hover:scale-110 transition-all ease-in duration-200"'>
                <h1 className='text-lg mb-4 font-bold '>About Our Company</h1>
                <p>Launched in 2022 by Kompare Group of Companies, <br />KompareXL website aims to offer a wide range of cross <br />platforms for end users to perform countless operations<br />on their files on any device.</p>
                </div>
                <div className=' hover:scale-110 transition-all ease-in duration-200"'>
                <h1 className='text-lg mb-4 font-bold'>Our Mission</h1>
                <p>Our Mission is to offer ad- free files format apps <br /> and platforms to end users with a simple interface for <br />easy of the app.</p>
                </div>
            </div>
            
            </div>
        </div>

        <div className=' bg-gray-300 h-[550px] w-[1330px] m-auto rounded-[20px] '>
            <h1 className='text-center py-[45px] text-lg mb-4 font-bold'>Our Features</h1>
            <div className='flex justify-evenly items-center mb-[173px] px-8'>
            
                <div>
                    <MdCompareArrows className='w-[43.33px] h-[43.33px] ml-[40px] mb-4'/>
                    <p>Compare Excel Files</p>
                </div>
                <div>
                    <BiHighlight className='w-[43.33px] h-[43.33px]  ml-[40px] mb-4'/>
                    <p>Highlight Duplicate</p>
                </div>
                <div>
                    <GiSaveArrow className='w-[43.33px] h-[43.33px]  ml-[40px] mb-4'  />
                    <p>Save Processed Files</p>
                </div>
            </div>

            <div className='flex justify-evenly items-center mr-8 px-8'>
                <div>
                    <FaFileDownload className='w-[43.33px] h-[43.33px]  ml-[40px] mb-4'/>
                    <p>Download Processed Files</p>
                </div>
                <div className=''>
                    <HiDocumentDuplicate className='w-[43.33px] h-[43.33px]  ml-[40px] mb-4' />
                    <p>Highlight Duplicate Files</p>
                </div>
                <div className=''>
                <MdFileDownload className='w-[43.33px] h-[43.33px]  ml-[40px] mb-4'/>
                <p>Download Files</p>
                </div>
            </div>
           

        </div>
        <div className='flex justify-center flex-col items-center py-[80px]'>
            <h1 className='text-4xl mb-4 font-semibold'>Our Numbers</h1>
            <div className='flex justify-evenly items-center w-full text-center py-12'>
                <div className=' hover:scale-110 transition-all ease-in duration-200"'>
                    <h1 className='text-2xl font-semibold'>500 +</h1>
                    <p>Daily Users</p>
                </div>
                <div className=' hover:scale-110 transition-all ease-in duration-200"'>
                    <h1  className='text-2xl font-semibold'>1,000 +</h1>
                    <p>New Users</p>
                </div>
                <div className=' hover:scale-110 transition-all ease-in duration-200"'>
                    <h1  className='text-2xl font-semibold'>500 +</h1>
                    <p>Successful Clients</p>
                </div>
            </div>
        </div>
       
       <div className='mt-8'>
       <Footer className='pt-4'/>
       </div>
     
    </div>
  )
}

export default About
