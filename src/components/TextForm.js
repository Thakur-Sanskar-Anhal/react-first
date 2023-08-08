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

    let handleWhClick = ()=>{
        let newText = text.replace(/\s/g, '')
        setText(newText)
    }

    let handleExClick = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
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

    let handleCaClick = ()=>{
        let newText = text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return "";
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
          });
        setText(newText);
    }


    let handleCoppyClick = ()=>{
        navigator.clipboard.writeText(text);
    }
    
    let handlekeClick = ()=>{
        let newText = text.replace(/\s/g, '-')
        setText(newText)
    }

    let handleSeClick = ()=>{
        let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(x){
            return x.toUpperCase()
        });;
        setText(newText);
    }

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-2">
            <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleSeClick} type='button'>Sentencecase</button>
        <button className="btn btn-primary " onClick={handleUpClick} type='button'>Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} type='button'>Lowercase</button>
        <button className="btn btn-primary " onClick={handleCaClick} type='button'>Camelcase</button>
        <button className="btn btn-primary mx-1" onClick={handlekeClick} type='button'>Kebab-case</button>
        <button className="btn btn-primary " onClick={handleWhClick} type='button'>White space</button>
        <button className="btn btn-primary mx-1" onClick={handleExClick} type='button'>Extra space</button>
        <div className="btn-group mx-5">
            <button className="btn btn-success " onClick={handleReciteClick} type="submit"  id="toggle">Speak</button>
            <button className="btn btn-warning " onClick={handlePauseClick} type="submit"  id="pause">Pause</button>
        </div>
        <button className="btn btn-danger ms-4" onClick={handleClearClick} type='button'>Clear Text</button>
        <button className="btn btn-secondary mx-1" type='button'>Undo</button>
        <button className="btn btn-success " onClick={handleCoppyClick} type='button'>Coppy</button>
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
