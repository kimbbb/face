import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./page/main/Main.js";
import Login from "./page/user/Login.js";
import Sign from "./page/user/Sign.js";
import About from "./page/about/About.js";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Sign/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
