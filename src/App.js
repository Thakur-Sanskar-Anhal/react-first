// import About from "./components/About";
import { useState } from "react";
import NavBar from "./components/NavBar";
import TextForms from './components/TextForm'

function App() {

  const [mode,setMode] = useState('light');

  let toggleMode = ()=>{
    if (mode=== 'light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Texttils" mode={mode}  toggleMode={toggleMode}/>
      <div className="container my-4">
      <TextForms heading="Enter the text to be analyzed"/>
      {/* <About heading="Dekho bhai log"/> */}
      </div>
    </>
  );
}

export default App;