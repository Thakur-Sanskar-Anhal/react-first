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

    // let defText = document.getElementById("myBox");
    // let checkDefault = ()=>{
    //     if (text === "Enter text here") {
    //         defText.value = null;
    //     }
    // }

    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} onClick={checkDefault}></textarea> */}
            <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        {/* <button className="btn btn-primary">Convert to uppercase</button>
        <button className="btn btn-primary">Convert to uppercase</button>
        <button className="btn btn-primary">Convert to uppercase</button> */}
    </div>

    <div className="container my-4">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read this text</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
