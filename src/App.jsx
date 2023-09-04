import { useState } from 'react'
 import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'

import About from './Components/About'
import Speakers from './Components/Attendees'
import Waitlist from './Components/Waitlist'
import Power from './Components/Power'
 import Details from './Components/Details'
import Navbarjs from './Components/Navbarjs';
function App() {


  return (
    <div className='w-screen h-fit md:w-screen md:h-fit'>
<main>

<Routes>
<Route path ='/' element={ <Home/>}>
  </Route><Route path ='/about' element={  <About/>}>
    </Route>
    
    <Route path ='/speakers' element={  <Speakers/>}></Route>
    <Route path ='/waitlist' element={  <Waitlist/>}></Route>
   <Route path ='/details' element={  <Details/>}></Route>
  
  
  
   </Routes>
  
 
   
  
   {/* <Power/> */}
   </main>
    </div>
  )
}

export default App
