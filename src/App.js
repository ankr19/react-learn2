import logo from "./logo.svg";
import "./App.css";
// import Navbar from './components/Navbar';
import Navbar from "./components/Navbar";
import Example2 from "./components/Example2";
import React, { useState } from "react";
import Example3 from "./components/Example3";
import { Outlet } from "react-router-dom";
function App() {
  const fruit = ["Apple", "Grape", "Banana", "Green"];
  
  return (
    <div className="">
      <Outlet />
      {/* <Navbar />
      <Example2 />
      <Example3 /> */}
    </div>
  );
}

export default App;
