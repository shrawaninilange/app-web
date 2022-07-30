import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  // { comiit }
  let navigate = useNavigate();
  return (
   <div className="nav">
    <div className="left">
    <h3 className='logo'>PathShala</h3>
    </div>
    <div className="right">
            <button className='nn' onClick={()=> navigate("/login")}>Sign In</button>
            <button className='nn'  onClick={()=> navigate("/register")}>Sign Up</button>
    </div>
   </div>
  )
}

export default Navbar