import React , { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/component/Navbar/navbar";
import Home from "./component/Home/home";
import Skills from "./component/Skills/skills";
import Education from "./component/Education/education";
import Experience from "./component/Experience/experience";
import About from "./component/About/about";
function shoot() {
  var element = document.body;
   element.classList.toggle("dark-mode");
}

function App() {
  return (
    <div className="App">
      {/* <div id="outer-div">
        <div id="inner-div"></div>
    </div> */}
      <button onClick={shoot}>Toggle dark mode</button>
      <BrowserRouter>
      {/* <Navbar /> */}
      <Home />
      <Skills />
      <Education />
      <Experience />
      <About />
      </BrowserRouter>
      </div>
  );
}

export default App;
