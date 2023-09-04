import React  from 'react'
import {motion } from 'framer-motion'
import Navbarjs from './Navbarjs';
const Speakers = () => {
  return (
    
    <div className=' bg-[#000038] md:mx-12 w-screen h-[60%]  md:w-[90%]  md:h-72 jusity-center items-center flex flex-col md:shadow-slate-400 md:shadow-lg rounded-2xl overflow-hidden mb-4'>
    
    <h1 className='text-[#b5fc1d] pt-4 text-[20px] md:text-[24px]'>Coming up</h1>
    <motion.h1 className='text-[#fff]  text-[20px] pb-4  md:text-[24px]'
    initial={{
      x:500, opacity:0
    }}
    animate={{x:-10, opacity:1}}
    transition={{delay:0.5, duration:5
    }}>Unilorin Tech Summit '24</motion.h1>
    
    <div className='h-fit'>
       <div className='flex relative '>
      <motion.div className='bg-[#b5fc1d] md:w-40 md:h-40  w-30 h-30 pb-4 p-4 rounded-2xl mx-2 text-center flex
      flex-col justify-center  items-center'
      
      initial={{
        y:500, opacity:0
      }}
      animate={{y:-10, opacity:1}}
      transition={{delay:0.5, duration:4
      }}
      
      ><h1 className='text-[40px] md:text-[40px] text-[#000038] mx-2 font-bold'>4</h1>
      <span className='text-[16px] md:text-[20px]  font-semibold '>
      Speakers</span></motion.div>
      <motion.div className='bg-[#b5fc1d] md:w-44 md:h-44  w-30 h-30 pb-4 p-4 rounded-2xl mx-2 text-center flex flex-col items-center justify-center'

initial={{
  y:500, opacity:0
}}
animate={{y:-10, opacity:1}}
transition={{delay:0.5, duration:5
}}


      ><h1 className='text-[#000038]  font-bold text-center text-[40px]'>2000+</h1>
      <span className='text-[16px] md:text-[20px] font-semibold'>Young minds</span>
      </motion.div>
      <motion.div className='bg-[#b5fc1d] md:w-40 md:h-40  w-30 h-30 pb-4 p-4 rounded-2xl mx-2 flex flex-col justify-center items-center'
       initial={{
        y:500, opacity:0
      }}
      animate={{y:-10, opacity:1}}
      transition={{delay:0.5, duration:4
      }}
      
    
      ><h1 className='text-[#000038]  font-bold text-center text-[40px]'>8</h1>
      <span  className='text-[16px] md:text-[20px] font-semibold p-2'>Panelists</span></motion.div>
    </div>
    </div>
       </div>
  )
}

export default Speakers
