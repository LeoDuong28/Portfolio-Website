import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/PreLoader";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {

  const [load, updateLoad] =  useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        
      </div>
    </Router>
  );
}


