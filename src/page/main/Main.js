import React from "react";
import * as M from "../../style/main.js";
import Header from "../../components/header/Header.js";
import First from "./First.js";
import Second from "./Second.js";
import mainface from "../../image/main.png"
import Footer from "../../components/footer/Footer.js";


function Main() {
  return (
    <>
    <Header/>
    <M.main>
      <M.mainBox>
        <img style={{width: '94%'}} src={mainface}/>
      </M.mainBox>
    </M.main>
    <M.main2>
      <First/>
    </M.main2>
    <M.main2>
      <Second/>
    </M.main2>
    
    

    </>
  );
}

export default Main;