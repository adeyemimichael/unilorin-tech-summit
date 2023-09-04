import React from 'react'
import image1 from '../assets/new.webp'
import image2 from '../assets/anu.webp'
import image3 from '../assets/leye.webp'
import { motion } from 'framer-motion';
import Talk from './Talk';
import Navbarjs from './Navbarjs';

const About = () => {
  
  return (
    <motion.div className='w-screen h-[100%] md:w-[90%]  bg-[#000038] md:h-screen rounded-2xl  shadow-slate-700 shadow-md md:mx-12  flex justify-center items-center flex-col mb-20 '>
      {/* <Navbarjs/> */}
    <div className='flex  flex-col flex-wrap md:flex  md:flex-row md:flex-nowrap  mt-10 md:w-screen md:h-40 w-screen h-fit  justify-center items-center'>
   
 <motion.div className='w-50 h-fit md:w-64 md:h-44  rounded-2xl p-2 overflow-hidden '
 initial={{
  y:-100, opacity:0
}}
animate={{y:0, opacity:1}}
transition={{delay:1, duration:2
}}> 
 <img src={image1} alt="" sizes="" className='w-fit h-100% md:w-64 md:h-44  rounded-2xl' /> </motion.div>
 <motion.div className=' w-50 h-50 md:w-68 md:h-44  rounded-2xl p-2 ' 
 initial={{
  y:-100, opacity:0
}}
animate={{y:0, opacity:1}}
transition={{delay:1, duration:2.5
}}>
   <img src={image2} alt="" srcset=""  className=' w-fit h-fit md:w-68 md:h-44 rounded-2xl'/>
 </motion.div>
 <motion.div className=' w-50 h-50 md:w-64 md:h-44  rounded-2xl p-2 '
 initial={{
  y:-100, opacity:0
}}
animate={{y:0, opacity:1}}
transition={{delay:1, duration:2
}}>
   <img src={image3} alt=""  className=' w-fit h-fit md:w-fit md:h-fit rounded-2xl'/>
 </motion.div>
    </div>
    <div className='p-4 text-center pb-3'>
  <motion.h1 className=' text-[#b5fc1d] md:font-semibold md:text-[20px] pb-3 font-bold text-[30px]'

initial={{
  x:200, opacity:0
}}
animate={{x:-10, opacity:1}}
transition={{delay:1, duration:2
}}
 >What is Unilorin Tech Summit</motion.h1>
     <motion.p className='text-[#fff]  text-[24px] md:text-xl  mb-2'
      initial={{
    x:200, opacity:0
  }}
  animate={{x:-10, opacity:1}}
  transition={{duration:2
  }}>Unilorin Tech Summit is a global annual Tech event that takes place in one of most populous <br />
   university in Nigeria with over 40,000 students.
    <br />
  
    </motion.p>
    <motion.p className='pt-4 text-[#fff]  text-[24px] md:text-xl'
     initial={{
      x:200, opacity:0
    }}
    animate={{x:-10, opacity:1}}
    transition={{delay:.5,  duration:3
    }}>It is a Summit that gathers Founders, Business Leaders, Tech Enthusiasts,<br/> Entrepreneurs from all walks of life to get instructions on how to lead our <br/> lives in the Tech Ecosystem, how to thrive in it and how to effectively leverage the <br/> system for global impact.</motion.p> 
     <motion.p className='pt-4 text-[#fff]  text-[24px] md:text-xl md:pb-14 pb-4'
     initial={{
      x:200, opacity:0
    }}
    animate={{x:-10, opacity:1}}
    transition={{delay:.5, duration:4
    }}>The major aim is to make the young generation see from a fresh perspective,<br/> even beyond the walls of the University, see them transformed in their careers <br/> and ultimately making them of global impact in the society.
    </motion.p>
  
    </div>

    <Talk/>
    </motion.div>
    
  )
}

export default About