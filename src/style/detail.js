import styled from "styled-components";
import close from '../image/close.png'

export const bg=styled.div`
  width:100%;
  height:100vh;
  background-color: rgba(0, 0, 0, 0.6);
`

export const detail=styled.div`
  width:26%;
  min-width: 460px;
  height:64%;
  background-color:#fff;
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
  border-radius:20px;
  outline:4px solid #BE97FF80;
  &:hover{
    outline:4px solid #BE97FF;
  }
`

export const header=styled.div`
  position:absolute;
  width:100%;
  height:16%;
  background-color:#904DFF;
  border-radius:20px 20px 0px 0px;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
`

export const title=styled.h3`
  color:#fff;
  font-weight:700;
  margin:0px;
`

export const closebtn=styled.div`
  background-image:url(${close});
  background-size:cover;
  border:none;
  width:26px;
  height:26px;
`

export const items=styled.div`
  width:100%;
  height:84%;
  position:absolute;
  top:16%;
  border-radius:0px 0px 20px 20px;
  background-color:#000;
  padding:30px;
`
export const top=styled.div`

`

export const face=styled.div`
`

export const dbox=styled.div`
`

export const date=styled.div`
`

export const weather=styled.div`
`


export const bottom=styled.div`
  
`