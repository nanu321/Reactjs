import { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('dark'); //whether dark mode is enabled or not.
  return (
    <>
      <Navbar title="TextUtils" mode={mode} aboutText="About TextUtils" />
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
