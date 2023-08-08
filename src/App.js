import NavBar from "./components/NavBar";
import TextForms from './components/TextForm'

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Texttils"/>
      <div className="container my-3">
      <TextForms heading="Enter the text to be analyzed"/>
      </div>
    </>
  );
}

export default App;