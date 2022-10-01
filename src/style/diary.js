import styled from "styled-components";

export const box=styled.div`
  width:80%;
  position: relative;
  left: 13%;
  padding:120px 0px;
`

export const card = styled.div`
  position:relative;
  float:left;
  width:320px;
  height:400px;
  background-color:#fff;
  border-radius:20px;
  margin:40px 20px;
  &:hover{
    outline:4px solid #BE97FF80;
  }
`

export const top=styled.div`
  position:absolute;
  width:100%;
  height:50%;
  background-color:#E9ECEF;
  border-radius:20px 20px 0px 0px;
  display:flex;
  align-items:center;
`

export const image=styled.img`
  width:100%;
  height:70%;
`

export const bottom=styled.div`
  position:absolute;
  width:100%;
  height:50%;
  bottom:0;
  padding:20px;
`

export const title=styled.h3`
  font-weight:700;
`

export const p = styled.p`
  font-size:18px;
`

export const check= styled.button`
  width:140px;
  height:50px;
  background-color:#904DFF;
  color:#fff;
  border-radius:20px;
  border:none;
  font-size:17px;
  &:hover{
    &:focus{
      outline:4px solid #BE97FF80;
    }
  } 
`