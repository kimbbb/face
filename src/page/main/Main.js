import React from "react";
import * as M from "../../style/main.js";
import mainface from "../../image/main.svg"



function Main() {
  return (
    <>
    <M.main>
      <M.mainBox>
        <img style={{width:'100%'}} src={mainface}/>
      </M.mainBox>
    </M.main>


    </>
  );
}

export default Main;