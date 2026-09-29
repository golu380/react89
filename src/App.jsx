

import Welocome from './components/Welcome'
import Navbar from "./components/Navbar";
import { Components,Component2 } from './components/Components';
import Footer from './components/Footer';
import Card from './components/Card';


// import './App.css'

function App() {



  return (
    <>
    <Navbar name= "rishita" course = "it"/>
    <div className='mycards'>
     <Card name="Amit" age={20} profession="trainer" course="it"/>
    <Card name="Arushi" age={20} profession="student" course="it"/>
    <Card name="rishita" age={20} profession="student" course="cs"/>
    <Card name="priya" age={20} profession="student" course="ai"/>
    <Card name="sumit" age={20} profession="student" course="cse"/>
    </div>
   
    
    <Footer/>

    </>
  )
}

export default App
