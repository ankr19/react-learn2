import logo from "./logo.svg";
import "./App.css";
// import Navbar from './components/Navbar';
import Navbar from "./components/Navbar";
import React, { useState } from "react";
function App() {
  const fruit = ["Apple", "Grape", "Banana", "Green"];
  const [color, setcolor] = React.useState("red");

  const [text, settext] = React.useState("");
  
  const handleClick = () => {
    if(color=="red"){
      setcolor("blue")
    }
    else{
      setcolor("red")
    }
  }
  return (
    <div className="">
      <Navbar />
      <div className="">
      <button className="" style={{color: "white", backgroundColor: color}} onClick={()=>{handleClick()}}>
        Click
      </button>
      </div>

      <div className="">
        <input name="text" id="text" type="text" className="form-text" value={text} onChange={(e)=>{settext(e.target.value)}} />
        {text}
        text
      </div>
    </div>
  );
}

export default App;
