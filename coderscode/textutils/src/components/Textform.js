import React ,{useState} from "react";



export default function Textform(p) {


  const handleUpClick = ()=>{
    let newtext = text.toUpperCase();

    setf(newtext);
  }


  const handleOnChange= (event)=>{
    console.log("onchane");
    setf(event.target.value);
  }
  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();

    setf(newtext);
  }
  const [text,setf]= useState('Enter text here');







  return (
    <>
    <div className="container">
        <h1>{p.heading} </h1>
      <div className="mb-3">
      
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>
    </div>

    <div className="container">
      <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Reading time :  {0.01*text.split(" ").length}  minutes</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
