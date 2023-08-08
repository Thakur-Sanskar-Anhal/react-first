import React, { useState } from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState("");

    let handleUpClick = ()=>{
        console.log("up clicked ");
        let newText= text.toUpperCase();
        setText(newText);
    }

    let handleLoClick = ()=>{
        console.log("up clicked ");
        let newText= text.toLowerCase();
        setText(newText);
    }

    let handleClearClick = ()=>{
        console.log("up clicked ");
        let newText= '';
        setText(newText);
    }

    let handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    let handleReClick = ()=>{
        let newText = text.replace(/\s/g, '')
        setText(newText)
    }

    let msg = new SpeechSynthesisUtterance(text);
    let toogle = document.getElementById('toggle');
    let pause = document.getElementById('pause');

    let handleReciteClick = () => {
        window.speechSynthesis.speak(msg);
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
            toogle.classList.toggle('btn-danger');
            pause.innerHTML= "Pause"
        }
        else {
            toogle.innerHTML = "Speak"
            toogle.classList.toggle('btn-danger');
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel(msg)
                pause.innerHTML= "Play"
            }
        }
    }
    let handlePauseClick = () => {
        window.speechSynthesis.pause(msg);
        if (pause.textContent === "Pause") {
            pause.innerHTML = "Play"
        }
        else {
            pause.innerHTML = "Play"
            if (pause.innerHTML === "Play"){
                window.speechSynthesis.resume(msg)
                pause.innerHTML= "Pause"
            }
        }
    }

    
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-2">
            <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleReClick}>Remove white space</button>
        <div className="btn-group mx-1">
            <button className="btn btn-success " onClick={handleReciteClick}type="submit"  id="toggle">Speak</button>
            <button className="btn btn-warning " onClick={handlePauseClick}type="submit"  id="pause">Pause</button>
        </div>
        <button className="btn btn-danger ms-5" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-secondary mx-1">Undo</button>
    </div>

    <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read this text</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
