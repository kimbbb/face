import Header from "../../components/header/Header2.js";
import Button from './Button.js';
import * as W from '../../style/writing.js'


function Writing() {

  return(
    <>
    <Header/>
    <W.wBox>
      <W.dial>일기 작성</W.dial>
      <W.date></W.date>
      <W.title></W.title>
      <W.ing></W.ing>
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