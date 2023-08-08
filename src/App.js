// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForms from './components/TextForm'

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Texttils"/>
      <div className="container my-4">
      <TextForms heading="Enter the text to be analyzed"/>
      {/* <About heading="Dekho bhai log"/> */}
      </div>
    </>
  );
}

export default App;