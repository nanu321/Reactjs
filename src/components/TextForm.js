import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  }
  /*own function*/
  const handleReverseClick = ()=>{
    let sptvar = text.split("");
    let revvar = sptvar.reverse();
    let newText = revvar.join("");
    setText(newText)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState('');
  return (
    <>
      <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
