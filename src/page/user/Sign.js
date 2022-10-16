import Header from "../../components/header/Header4.js";
import * as L from "../../style/login.js"
import slogo from "../../image/slogo.svg"
import user from "../../image/user.svg"
import { useNavigate } from "react-router-dom";


function Sign() {

  let navigate=useNavigate();

  return(
    <>
    <Header/>
    <L.sbox>
      <L.inBox>
        <L.left>
          <L.leftimg src={user}/>
        </L.left>

        <L.right>
          <L.login>
            <L.llogo src={slogo}/>
            <L.id type='text' placeholder="아이디 입력"/>
            <L.id type='password' placeholder="비밀번호 입력"/>
            <L.push>회원가입</L.push>
          </L.login>
        </L.right>

        <L.text>이미 회원이신가요?
        <L.link onClick={()=>{ navigate('/') }}>로그인</L.link>
      </L.text>
      </L.inBox>
    </L.sbox>
    </>
  )
}

export default Sign;