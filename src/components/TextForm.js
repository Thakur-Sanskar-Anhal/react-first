import React, { useState } from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState("");

    let handleUpClick = ()=>{
        console.log("up clicked ");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","primary")

    }

    let handleLoClick = ()=>{
        console.log("up clicked ");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","primary")

    }

    let handleClearClick = ()=>{
        console.log("up clicked ");
        let newText= '';
        setText(newText);
        props.showAlert("Cleared text space","danger")
    }

    let handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    let handleWhClick = ()=>{
        let newText = text.replace(/\s/g, '')
        setText(newText)
        props.showAlert("Cleared white spaces","primary")

    }

    let handleExClick = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","primary")

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
            props.showAlert("Reciting","success")
        }
        else {
            toogle.innerHTML = "Speak"
            toogle.classList.toggle('btn-danger');
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel(msg)
                pause.innerHTML= "Play"
                props.showAlert("Stoped","danger")
            }
        }
    }
    let handlePauseClick = () => {
        window.speechSynthesis.pause(msg);
        if (pause.textContent === "Pause") {
            pause.innerHTML = "Play"
            props.showAlert("Paused","warning")
        }
        else {
            pause.innerHTML = "Play"
            if (pause.innerHTML === "Play"){
                window.speechSynthesis.resume(msg)
                pause.innerHTML= "Pause"
                props.showAlert("Resumed","success")
            }
        }
    }

    let handleCaClick = ()=>{
        let newText = text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return "";
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
          });
        setText(newText);
        props.showAlert("Converted to camel case","primary")
    }


    let handleCoppyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied","success")
    }
    
    let handlekeClick = ()=>{
        let newText = text.replace(/\s/g, '-')
        setText(newText)
        props.showAlert("Converted to kebab case","primary")

    }

    let handleSeClick = ()=>{
        let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(x){
            return x.toUpperCase()
        });;
        setText(newText);
        props.showAlert("Converted to sentence case","primary")
    }

  return (
    <>
    <div className='container ' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-2">
            <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#353B43':'white' , color: props.mode==='dark'?'#D5D5D5':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSeClick} type='button'>Sentencecase</button>
        <button className="btn btn-primary my-1" onClick={handleUpClick} type='button'>Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} type='button'>Lowercase</button>
        <button className="btn btn-primary my-1" onClick={handleCaClick} type='button'>Camelcase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlekeClick} type='button'>Kebab-case</button>
        <button className="btn btn-primary my-1" onClick={handleWhClick} type='button'>White space</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExClick} type='button'>Extra space</button>
        <div className="btn-group mx-5 my-1">
            <button className="btn btn-success " onClick={handleReciteClick} type="submit"  id="toggle">Speak</button>
            <button className="btn btn-warning " onClick={handlePauseClick} type="submit"  id="pause">Pause</button>
        </div>
        <button className="btn btn-danger ms-4 my-1" onClick={handleClearClick} type='button'>Clear Text</button>
        <button className="btn btn-secondary mx-1 my-1" type='button'>Undo</button>
        <button className="btn btn-success my-1" onClick={handleCoppyClick} type='button'>Coppy</button>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black', paddingBottom:'30px'}}>
        <h2>Your text summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read this text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to see the preview"}</p>
    </div>
    </>
  )
}
