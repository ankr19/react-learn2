import logo from "./logo.svg";
import "./App.css";
// import Navbar from './components/Navbar';
import Navbar from "./components/Navbar";
import Example2 from "./components/Example2";
import React, { useState } from "react";
import Example3 from "./components/Example3";
import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
function App() {
  let location = useLocation();
  let navigate = useNavigate();
  const fruit = ["Apple", "Grape", "Banana", "Green"];
  React.useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, [location]);
  return (
    <div className="">
      <Navbar />
      <div className="container mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
