 import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Call from './Components/Call';

function App() {
  return (
    <div >
      <Navbar/>
     <Routes>
      <Route path="/" element ={<Home/>}/>
      
      <Route path="/call" element ={<Call/>}/>
     </Routes>

     <Footer/>
     
    </div>
  );
}

export default App;
