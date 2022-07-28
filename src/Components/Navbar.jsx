import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
   <div className="nav">
    <div className="left">
    <h3 className='logo'>PathShala</h3>
    </div>
    <div className="right">
            <button className='nn'>Sign In</button>
            <button className='nn'>Sign Up</button>
    </div>
   </div>
  )
}

export default Navbar