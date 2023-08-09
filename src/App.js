// import About from "./components/About";
import { useState } from "react";
import NavBar from "./components/NavBar";
import TextForms from './components/TextForm'

function App() {

  const [mode,setMode] = useState('light');

  let toggleMode = ()=>{
    if (mode=== 'light') {
      setMode('dark')
      document.body.style.backgroundColor=('#2B3036')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor=('white')

    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Texttils" mode={mode}  toggleMode={toggleMode}/>
      <div className="container my-4">
      <TextForms heading="Enter the text to be analyzed" mode={mode}/>
      {/* <About heading="Dekho bhai log"/> */}
      </div>
    </>
  );
}

export default App;