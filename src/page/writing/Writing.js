import Header from "../../components/header/Header2.js";
import Button from './Button.js';
import * as W from '../../style/writing.js'
import { useState } from "react";


function Writing() {


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

      <W.title placeholder="제목을 작성해주세요.">
        
      </W.title>

      <W.ingbox>
        <W.ing placeholder="일기를 작성해주세요."></W.ing>
      </W.ingbox>
      <W.pushBox>
        <W.push>삭제</W.push>
        <W.push>완료</W.push>
      </W.pushBox>
    </W.wBox>
    <Button/>
    </>
  )
}

export default Writing;