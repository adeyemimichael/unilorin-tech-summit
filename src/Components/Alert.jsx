// SuccessAlert.js
import React from 'react';
import { motion } from "framer-motion";
function SuccessAlert() {
  return (
    <motion.div className=" font-bold absolute w-fit h-fit pl-6 pr-6 pt-4 pb-4 border-b-2 border-b-[#000038]  bg-white text-[#000038] rounded-lg "
    initial={{
      x: 200,
    
    }}
    animate={{ x: -10, opacity: 1 }}
    transition={{ }}>
      Form submitted successfully! 
    </motion.div>
  );
}

export default SuccessAlert;
