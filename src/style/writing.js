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
  margin-bottom:20px;
  width:100%;
  height:70px;
  display: flex;
  justify-content: space-between;
`

export const mon=styled.div`
  font-weight:700;
  font-size:18px;
  width:48%;
  height:100%;
  display: flex;
  padding-left: 30px;
  align-items: center;
  background:#ECECFF;
  border-radius: 10px;
  position: relative;
`

export const month=styled.input`
  height: 40px;
  width: 260px;
  padding: 6px;
  border: none;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%,-50%);
`

export const weather=styled.select`
  display: flex;
  padding-left: 30px;
  align-items: center;
  height: 40px;
  width: 260px;
  padding: 6px;
  border: none;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%,-50%);
`

export const icon = styled.option`
  text-align: center;
`

export const title=styled.input`
  width:100%;
  height:70px;
  font-size:18px;
  font-weight:700;

  margin-bottom:20px;
  padding:20px;
  border-radius: 10px;
  background:#EFF2F9;
  border:none;
  &:focus{
    outline:4px solid #BE97FF82;
  }
`


export const ingbox=styled.div`
  width:100%;
  height:300px;
  padding:20px;
  margin-bottom:14px;
  border:1px solid #000;
  border-radius: 10px;
  background:#EFF2F9;
  border:none;
  &:focus-within{
    outline:4px solid #BE97FF82;
  }
`

export const ing=styled.textarea`
  width:100%;
  height:100%;
  margin-bottom:14px;
  resize: none;
  overflow:auto;
  border-radius: 10px;
  background:#EFF2F9;
  border:none;
  &:focus{
    outline:none;
  }
  
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