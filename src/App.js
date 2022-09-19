import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./page/main/Main.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
