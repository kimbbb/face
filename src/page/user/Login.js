import Header from "../../components/header/Header4.js";
import * as L from "../../style/login.js"
import llogo from "../../image/llogo.svg"
import user from "../../image/user.svg"
import { useNavigate } from "react-router-dom";


function Login() {

  let navigate=useNavigate();

  return(
    <>
    <Header/>
    <L.box>
      <L.inBox>
        <L.left>
          <L.leftimg src={user}/>
        </L.left>

        <L.right>
          <L.login>
            <L.llogo src={llogo}/>
            <L.id type='text' placeholder="아이디 입력"/>
            <L.id type='password' placeholder="비밀번호 입력"/>
            <L.push onClick={()=>{navigate('/main')}}>로그인</L.push>
          </L.login>
        </L.right>

        <L.text>아직 계정이 없으신가요?
        <L.link onClick={()=>{ navigate('/signup') }}>회원가입</L.link>
      </L.text>
      </L.inBox>
    </L.box>
    </>
  )
}

export default Login;