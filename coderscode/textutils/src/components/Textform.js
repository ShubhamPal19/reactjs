import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    props.showAlert("Converted to upper case", "success");

    setf(newtext);
  };

  const handleOnChange = (event) => {
    console.log("onchane");
    setf(event.target.value);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    props.showAlert("Converted to lower case", "success");

    setf(newtext);
  };
  const [text, setf] = useState("Enter text here");
  
  return (
    <>
      <div className="container" >
        <h1 
            style={{
            
              color: props.mode === "dark" ? "white" : "black"

            }}>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
         
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"

            }}
          ></textarea>
        </div>

        <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          {" "}
          Convert to Uppercase
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          {" "}
          Convert to Lowercase
        </button>
      </div>

      <div className="container" style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black"

            }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>Reading time : {0.01 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
