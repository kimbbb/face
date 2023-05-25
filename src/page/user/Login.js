import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header4.js";
import * as L from "../../style/login.js"
import llogo from "../../image/llogo.svg"
import user from "../../image/user.svg"
import { useNavigate } from "react-router-dom";



function Login() {

  let [id, setId]=useState();
  let [password, setPassword]=useState();

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
            <L.id type='text' placeholder="아이디 입력" onChange={(e) => {setId(e.target.value)}}/>
            <L.id type='password' placeholder="비밀번호 입력" onChange={(e) => {setPassword(e.target.value)}}/>
            <L.push onClick={()=>{ 
              axios
                .post('http://localhost:8081/auth/sign-in', { id: id, password: password })
                .then((result) => {navigate("/main")})
                .catch((result)=>{alert('로그인에 실패하셨습니다 😥')});
            }} >로그인</L.push>

            <L.text>아직 계정이 없으신가요?
              <L.link onClick={()=>{navigate("/signup")}}>회원가입</L.link>
            </L.text>
          </L.login>
        </L.right>
      </L.inBox>
    </L.box>
    </>
  )
}

export default Login;