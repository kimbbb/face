import Header from "../../components/header/Header2.js";
import Button from '../../components/Button.js';
import Mood from './Mood.js'
import * as W from '../../style/writing.js'
import { useState } from "react";


function Writing() {

  let [props, setProps]=useState("none");
  const [img, setImg] = useState("")

  function changeMode(){
    if (props === "none"){
      setProps("block")
    } else {
      // console.log('none')
      setProps("none")
    }
  }

 

  return(
    <>
    <Header/>
    <W.wBox>
      <W.dial>일기 작성</W.dial>
      <W.date>
        <W.mon>날짜<W.month type='date'/></W.mon>
        <W.mon>날씨
          <W.weather>
            <W.icon>🌞 맑음</W.icon>
            <W.icon>🌥️ 흐림</W.icon>
            <W.icon>☃️ 눈</W.icon>
            <W.icon>☔ 비</W.icon>
          </W.weather>
          </W.mon>
      </W.date>

      <W.titlebox>
        <W.title placeholder="제목을 작성해주세요."/>
        <W.mood 
         onClick={changeMode}
         img={img}
        >
        </W.mood>
      </W.titlebox>

      <W.ingbox>
        <W.ing placeholder="일기를 작성해주세요."></W.ing>
      </W.ingbox>
      <W.pushBox>
        <W.push>완료</W.push>
      </W.pushBox>
    </W.wBox>
    {
      props === "block" ?
      <Mood props={props} img={img} setImg={setImg}/>:null
    }
    <Button/>
    </>
  )
}

export default Writing;