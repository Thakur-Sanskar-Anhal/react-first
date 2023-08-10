// import About from "./components/About";
import { useState } from "react";
import NavBar from "./components/NavBar";
import TextForms from './components/TextForm'
import Alerts from "./components/Alerts";

function App() {

  let [mode,setMode] = useState('light');
  let [alert,setAlert]= useState(null);

  let showAlert = (message,type)=>{
    setAlert(
      {msg: message,
      type: type}
    )
    setTimeout(() => {
      setAlert(null)
    }, 750);
  }

  let toggleMode = ()=>{
    if (mode=== 'light') {
      setMode('dark')
      document.body.style.backgroundColor=('#2B3036')
      showAlert("Dark mode has been enabled","dark")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor=('white')
      showAlert("Light mode has been enabled","warning")
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Texttils" mode={mode}  toggleMode={toggleMode}/>
      <div className="container " style={{position:'relative'}}>
        <Alerts alert= {alert}/>
      </div>
      <div className="container my-4">
        <TextForms heading="Enter the text to be analyzed" mode={mode} showAlert={showAlert}/>
        {/* <About heading="Dekho bhai log"/> */}
      </div>
    </>
  );
}

export default App;