import React, { useState, useEffect } from "react";

//import About from "./components/About";
//import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
{/*
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
*/}

import {
  BrowerRouter as Router,
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


