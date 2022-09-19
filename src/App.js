import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Header.js";
import Main from "./page/main/Main.js";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
