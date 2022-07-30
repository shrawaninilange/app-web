 import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Call from './Components/Call';
import Register from "./Components/register/register";
import Login from "./Components/login/login"
import { useState } from 'react';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div >
      <Navbar/>
     <Routes>
      <Route path="/" element ={<Home/>}/>
      
      <Route path="/call" element ={<Call/>}/>
      <Route path="/login" element ={ <Login setLoginUser={setLoginUser}/>}/>
      <Route  path="/register" element ={   <Register />}/>
     
       
     </Routes>

     <Footer/>
     
    </div>
  );
}

export default App;
