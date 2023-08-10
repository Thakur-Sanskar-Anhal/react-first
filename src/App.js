import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import TextForms from './components/TextForm'
import Alerts from "./components/Alerts";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";

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
      document.title = 'Text.tinker- dark mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor=('white')
      showAlert("Light mode has been enabled","warning")
      document.title = 'Text.tinker- light mode'
    }
  }
  return (
    <>
    <Router basename="/react-first">
      <NavBar title="Text.tinker" aboutText="About Texttils" mode={mode}  toggleMode={toggleMode}/>
      <div className="container " style={{position:'relative'}}>
        <Alerts alert= {alert}/>
      </div>
      <div className="container my-4">
      <Routes>
          <Route exact path="" element={<TextForms heading="Enter the text to be analyzed" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/" element={<TextForms heading="Enter the text to be analyzed" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About heading="About Tinker.textn" mode={mode}/>}/>
      </Routes>
      </div>
      <Footer mode={mode}/>
    </Router>
    </>
  );
}

export default App;