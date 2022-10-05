import styled from "styled-components";
import close from '../image/close.png'

export const bg=styled.div`
  width:100%;
  height:100vh;
  background-color: rgba(0, 0, 0, 0.6);
`

export const detail=styled.div`
  width:30%;
  min-width: 560px;
  height:70%;
  background-color:#fff;
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
  border-radius:20px;
  outline:4px solid #BE97FF80;
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
  width:20px;
  height:20px;
`

export const items=styled.div`
  width:100%;
  height:84%;
  position:absolute;
  top:16%;
  border-radius:0px 0px 20px 20px;
  background-color:#fff;
  padding:40px;
`
export const top=styled.div`
  width:100%;
  height:26%;
  display:flex;
  justify-content:space-between;
  /* background-color:#000; */
  margin-bottom:30px;
`

export const face=styled.div`
  width:26%;
  height:100%;
  background-color:#ECECFF;
  border-radius:20px;
  display:flex;
  align-items: center;
  justify-content: center;
`

export const icon = styled.img`
  width:80%;
  height:80%;
`

export const dbox=styled.div`
  width:66%;
  height:100%;
  background-color:#ECECFF;
  border-radius:20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const date=styled.div`
  width:40%;
  height: 74%;
  background-color:#fff;
  border-radius:20px;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const bottom=styled.div`
  width:100%;
  height:54%;
  background-color:#ECECFF;
  padding:16px;
  margin-bottom:20px;
  border-radius:10px;
  font-size: 18px;
`

export const book=styled.div`
  width:100%;
  height:100%;
  padding:10px;
  overflow:auto;
  word-break:break-all;
  background-color:#ECECFF;
  &::-webkit-scrollbar {
    width: 16px;
    height: 10px;
    border-radius: 10px;
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #BE97FF66;
    border-radius: 10px;
    height: 30%;
  }
`

export const del = styled.button`
width:100px;
height:46px;
float: right;
border:none;
border-radius:10px;
background-color:#904DFF;
color:#fff;
font-weight:600;
&:hover{
  &:focus{
    outline:4px solid #BE97FF80;
  }
}
`