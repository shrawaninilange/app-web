import React from 'react'
import "./Call.css"
const Call = () => {
  return (
    <div className="call">
 <div className="leftcall">
   <h1 className='c1'>Book your Free Demo Session</h1>
   <h4 className='c2'> Share your information for a call back</h4>
 </div>
 <div className="rigthcall">
   <form action="">
    <h3>All the fields are mandatory *</h3>
    <input className='in' type="text" placeholder='Enter Your Name' />
    <div className='diss'>
    <input  className='in' type="text" placeholder='Enter Your Password' />
    <input  className='in' type="text" placeholder='Enter Your class' />
    </div>
    <button className='suu'>SUBMIT REQUEST</button>
   </form>
 </div>
    </div>
  )
}

export default Call