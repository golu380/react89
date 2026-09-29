

import Welocome from './components/Welcome'
import Navbar from "./components/Navbar";
import { Components,Component2 } from './components/Components';
import Footer from './components/Footer';
import Card from './components/Card';
import BasicCard from './components/BasicCard';
import ResultComponent from './components/ResultComponent';
import ListComponents from './components/ListComponents';


// import './App.css'

function App() {

const marks = [23,100,89,45,34,89,95,97,98]

  return (
    <>
    <Navbar name= "rishita" course = "it"/>
    <div className='mycards'>
    <ListComponents/>

    <BasicCard>
      <h1>i am basic card</h1>
      <p>i am paragraphi</p>
    </BasicCard>
    <ResultComponent marks={98}/>

    {marks.map((mark,index)=>(
     <ResultComponent key={index} marks={mark} />
    ))}
    </div>
   
    
    <Footer/>

    </>
  )
}

export default App
