import styled from "styled-components";
import lbg from "../image/lbg.png"
import sbg from "../image/sbg.png"

export const box=styled.div`
  background-image:url(${lbg});
  width:100%;
  height:100vh;
`

export const sbox=styled.div`
  background-image:url(${sbg});
  width:100%;
  height:100vh;
`

export const inBox=styled.div`
  position: relative;
  top:50%;
  left:50%;
  transform: translate(-50%, -46%);
  background:#fff;
  width:52%;
  height:62%;
  min-width: 1000px;
  min-height: 600px;
`

export const left=styled.div`
  position: absolute;
  width:50%;
  height:100%;
`

export const leftimg=styled.img`
  min-width:50%;
  min-height:100%;
`

export const text=styled.p`
  position: absolute;
  left: 0%;
  bottom: -7%;
`

export const link=styled.a`
  margin-left:8px;
  font-weight:700;
  text-decoration:none;
  color:#A253C8;
`

export const right=styled.div`
  position: absolute;
  width:50%;
  height:100%;
  min-width:50%;
  min-height:100%;
  right:0%
`

export const login=styled.div`
  position: absolute;
  display:flex;
  top:48%;
  left: 50%;
  transform: translate(-50%,-50%);
  flex-direction: column;
  align-items: center;
`

export const llogo = styled.img`
  min-width:100px;
  min-height:50px;
  margin-bottom:30px;
`;

export const id=styled.input`
  width: 320px;
  height: 56px;
  border:none;
  border-radius:20px;
  background:#DFE2FF66;
  padding:20px;
  margin-bottom:20px;
  &:focus{  
    outline:4px solid #BE97FF66;
    background-color:#dfe2ffc2;
  }
`

export const push=styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 320px;
  height: 60px;
  border:none;
  border-radius:20px;
  background:#BE97FF66;
  padding:20px;
  color:#fff;
  font-weight:700;
  font-size:20px;
  &:focus{  
    background-color:#0d6efd6b;
  }
`