 import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      <Navbar/>
     <Routes>
      <Route path="/" element ={<Home/>}/>
     </Routes>

     <Footer/>
    </div>
  );
}

export default App;
