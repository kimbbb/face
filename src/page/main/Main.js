import React from "react";
import * as M from "../../style/main.js";
import mainface from "../../image/main.svg"
import Header from "../../components/header/Header.js";



function Main() {
  return (
    <>
    <Header/>
    <M.main>
      <M.mainBox>
        <img style={{width:'100%'}} src={mainface}/>
      </M.mainBox>
    </M.main>


    </>
  );
}

export default Main;