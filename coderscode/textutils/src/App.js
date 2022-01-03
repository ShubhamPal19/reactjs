import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



let name = "shubham";
function App() {
  const  [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark')
  const [alert, setAlert] = useState(null)
  
  const showAlert = (msg,_type)=>{
    setAlert({
      message: msg,
      type: _type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }


  let textcolor = 'dark';
  const toggleMode = ()=>{
    if(mode==='light'){
      showAlert("DarkMode has been enabled","success");
      setMode('dark');
      setTextColor('light');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      showAlert("LightMode has been enabled","success");
      setMode('light');
      setTextColor ('dark');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <> 
      <Router> 
      <Navbar title = "TextUtils" mode ={mode} toggleMode={toggleMode} textColor = {textColor}></Navbar>

      <Alert alert ={alert}></Alert>
     
      <div className="container my-3">

      <Routes>
          <Route path="/about" element = {  <About />}/>
          
        
          <Route exact path="/" element = { <Textform mode ={mode}  showAlert ={showAlert} heading = "Enter the text to analyze"></Textform>
       } />
            
             
        
      </Routes>

        </div>

      </Router>
      
    </>
  );
 
}

export default App;
