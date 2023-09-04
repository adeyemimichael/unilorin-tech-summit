import React from 'react'
import { AiOutlineLinkedin,AiOutlineTwitter,AiOutlineInstagram,AiFillFacebook,AiOutlineMail } from "react-icons/ai";
const Power = () => {
  return (
    <div className='w-screen h-fit  flex flex-col justify-center items-center'>
<div className='flex flex-row  mt-20 shadow-md  p-4'> <hr />
<AiFillFacebook className='m-1 rounded-lg cursor-pointer text-[#000038] hover:text-[#b5fc1d]' size={30}/>
<AiOutlineTwitter className='m-1 rounded-lg cursor-pointer text-[#000038] hover:text-[#b5fc1d]' size={30}/>
<AiOutlineInstagram className='m-1 rounded-lg cursor-pointertext-[#000038] hover:text-[#b5fc1d]' size={30}/>
<AiOutlineMail className='m-1 rounded-lg cursor-pointer text-[#000038] hover:text-[#b5fc1d]' size={30}/>
<AiOutlineLinkedin className='m-1 rounded-lg cursor-pointer text-[#000038] hover:text-[#b5fc1d]' size={30}/>
</div>
<div className='flex flex-col  p-4'>
<h1 className='  text-[#000038]'>Powered by </h1>
<p className='font-bold text-[#000038]'>Unilorin Christian Union</p>
{/* LOGO HERE */}
</div>


    </div>
  )
}

export default Power