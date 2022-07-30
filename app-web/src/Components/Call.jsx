import React from 'react'
import "./Call.css"
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
const Call = () => {
    const nav = useNavigate();
    const [username, setusername] = useState("");
    const [number, setnumber] = useState("");
    const [ class1, setclass] = useState("");
    const [newd, setnewd] = useState([]);
    const on = (e) => {
        e.preventDefault();
        if(username && number && class1)
        {
          const newff = {
            username: username,
             class1: class1,
            number: number,
          
          };
          setnewd([...newd, newff]);
          console.log(newd);
          nav("/")
        }
        else{
          alert("Please Fill Data")
        }
      };
  return (
    <div className="call">
 <div className="leftcall">
   <h1 className='c1'>Book your Free Demo Session</h1>
   <h4 className='c2'> Share your information for a call back</h4>
 </div>
 <div className="rigthcall">
   <form action="" onSubmit={on}>
    <h3>All the fields are mandatory *</h3>
    <input className='in'   onChange={(e) => setusername(e.target.value)}type="text" placeholder='Enter Your Name' />
    <div className='diss'>
    <input  className='in'  onChange={(e) => setnumber(e.target.value)} type="text" placeholder='Enter Your Number' />
    <input  className='in'  onChange={(e) => setclass(e.target.value)}type="text" placeholder='Enter Your class' />
    </div>
    <button className='suu'>SUBMIT REQUEST</button>
   </form>
 </div>
    </div>
  )
}

export default Call