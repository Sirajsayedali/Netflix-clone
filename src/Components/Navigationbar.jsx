import React, { useEffect } from 'react'
import './Navigationbar.css'
import { useState } from 'react'



function Navigationbar() {
  const [show,setShow]=useState(false)
  /* side effect */
  useEffect(()=>{
    window.addEventListener("scroll",()=>{ /* first argument should be the event and second argument should be function to execute */
      if(window.scrollY>600){
        setShow(true)
      }
      else{
        setShow(false)
      }
    }) /* dependency is null */
  })
  return (
    <div className={`${show && 'nav-black'} nav`} >
<img width={'150px'}  src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
    </div>
    
  )
}

export default Navigationbar