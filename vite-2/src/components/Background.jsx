import React from 'react'

import { useState } from 'react'
function Background() {

   const [color,setColor]=useState("olive")

  return (
    
   <div className ='  w-screen h-screen duration-100' style={{backgroundColor:color}}>
<div className=' flex flex-wrap justify-center  '>
    <div className='flex flex-wrap justify-center gap-2 bg-white shadow-lg px-3 py-2 rounded-full'>
       <button className=' outline-none rounded-full' style={{backgroundColor:"red"}} onClick={()=>setColor('red')} >Red</button>
       <button className='outline-none rounded-full'style={{backgroundColor:"blue"}} onClick={()=>setColor('blue')} >Blue</button>
       <button className='outline-none rounded-full'style={{backgroundColor:"orange"}} onClick={()=>setColor('orange')} >Orange</button>
       <button className='outline-none rounded-full'style={{backgroundColor:"#FFD700"}} onClick={()=>setColor('#FFD700')} >Golden</button>
       <button className='outline-none rounded-full'style={{backgroundColor:"grey"}} onClick={()=>setColor('grey')} >Grey</button>
       </div>  
       </div>

   </div>
    
  )
}

export default Background