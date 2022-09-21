import styled from "styled-components";

export const wBox= styled.div`
  padding:40px;
  position:absolute;
  top:54%;
  left:50%;
  transform:translate(-50%, -50%);
  width:52%;
  height:700px;
  min-width:800px;
  background:#fff;
  border-radius:20px;
`

export const dial=styled.h2`
  margin-bottom:30px;
  font-size:24px;
  font-weight:700
`

export const date=styled.div`
  background:#000;
  margin-bottom:20px;
  width:100%;
  height:70px;
`

export const title=styled.input`
  width:100%;
  height:70px;
  margin-bottom:20px;
  padding:10px;
  border-radius: 10px;
  background:#EFF2F9;
  border:none;
  &:focus{
    outline:4px solid #BE97FF82;
  }
`
export const ing=styled.textarea`
  width:100%;
  height:300px;
  padding:10px;
  margin-bottom:14px;
  resize: none;
  border:1px solid #000;
  overflow:auto;
  border-radius: 10px;
  background:#EFF2F9;
  border:none;
  &:focus{
    outline:4px solid #BE97FF82;
  }

`
export const pushBox=styled.div`
  display:flex;
  justify-content: flex-end;
`

export const push=styled.button`
  width:120px;
  height:60px;
  font-weight:700;
  font-size:18px;
  color:#fff;
  border-radius:10px;
  background:#BE97FF82;
  border:none;
  margin-left:20px;
  &:focus {
    &:hover{
      outline:4px solid #BE97FF;
      background:#BE97FF99;
    }
  }
`