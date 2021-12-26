import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

let name = "shubham";
function App() {
  return (
    <>
       
      <Navbar title = "TextUtils" ></Navbar>
      <div className="container my-3">
        <Textform heading = "Enter the text to analyze"></Textform>
        <About></About>
        </div>
    </>
  );
 
}

export default App;
