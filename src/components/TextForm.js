import React, { useState } from 'react'

export default function TextForm(props) {
    
    let handleUpClick = ()=>{
        console.log("up clicked ");
        let upText= text.toUpperCase();
        setText(upText);
    }

    let handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        {/* <button className="btn btn-primary">Convert to uppercase</button>
        <button className="btn btn-primary">Convert to uppercase</button>
        <button className="btn btn-primary">Convert to uppercase</button> */}
    </div>
  )
}
