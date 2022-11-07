import Header from "../../components/header/Header4.js";
import * as L from "../../style/login.js"
import axios from "axios";
import slogo from "../../image/slogo.svg"
import user from "../../image/user.svg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Sign() {

  const [selected, setSelected]=useState("");

  let [id, setId]=useState();
  let [password, setPassword]=useState();

  let navigate=useNavigate();

  useEffect(()=>{
    console.log(selected);
  },[selected])

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
            <L.id type='text' placeholder="아이디 입력" onChange={(e) => {
                setId(e.target.value);
              }}/>
            <L.id type='password' placeholder="비밀번호 입력" onChange={(e) => {
                setPassword(e.target.value);
              }}/>
            <L.push onClick={() => {
                axios
                  .post('http://localhost:8081/auth/sign-up', { id: id, password: password, type: selected })
                  .then((result) => {navigate("/")})
                  .catch(()=>{alert('이미 존재하는 아이디입니다😥')})
              }}>회원가입</L.push>

            <L.text>이미 회원이신가요?
              <L.link  onClick={() => {navigate("/")}}>로그인</L.link>
            </L.text>
          </L.login>
        </L.right>

      </L.inBox>
    </L.sbox>
    </>
  )
}

export default Sign;