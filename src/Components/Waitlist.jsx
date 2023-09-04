import React from 'react'
import Navbarjs from './Navbarjs';
import { motion } from 'framer-motion';
<Navbarjs/>
const Waitlist = () => {
  return (
    <div className='md:mx-12'>


   <div className='mt-6 text-center sm:mb-20 mb-10 '>
    <h1 className='text-[20px] md:text-[30px]'>Details Coming soon....</h1>
   </div>
   
   <div className=' md:flex md:flex-col md:justify-center md:items-center flex flex-col justify-center items-center bg-[#000038]  w-screen h-[60%]  md:w-[90%]  md:h-[60%]  md:shadow-slate-400 md:shadow-lg rounded-2xl  rounded-t-none md:mb-20  text-white relative md:mx-12'>
  
<h1 className='sm:pb-32 mx-4 sm:mx-0 pt-6'>Subscribe to our newsletter <br></br>
To stay updated on the upcoming event</h1>
<motion.form action="get" className='bg-[#b5fc1d] w-5/6 md:w-1/2 h-100%  md:pt-8 md:pl-6 md:pr-6 md:pb-6  p-4 mb-10 mt-6 rounded-md md:absolute md:mt-48 md:mb-0'
initial={{
  x:500, opacity:0
}}
animate={{x:0, opacity:1}}
transition={{delay:0.5, duration:4
}}

>
  <label htmlFor="" className='text-[#000038] p-4'>Name:</label>
  <input type="text" required  className='w-full bg-[#96c237] rounded-md p-2 outline-none '/>
  <label htmlFor="" className='text-[#000038] p-2'>Email:</label>
  <input type="email" required className='w-full bg-[#96c237] rounded-md p-2 outline-none'/>
  <button className='bg-[#000038] my-4 w-full  rounded-md p-2'>Submit</button>
</motion.form>
</div>
    </div>
  )
}

export default Waitlist