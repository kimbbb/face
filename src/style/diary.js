import styled from "styled-components";

export const diary=styled.div`
  width: 100%;
  height: 100%;
  position: relative;

`
export const dbox=styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;

`

export const diarybox=styled.div`
  position:relative;
  float:left;
  border-radius: 20px;
  width: 280px;
  height: 340px;
  background-color: #fff;
  margin:20px;
`


export const top = styled.div`
  position: absolute;
  width:100%;
  height:50%;
  background-color:#E9ECEF;
  border-radius: 20px 20px 0px 0px;
`

export const face=styled.img`
  height: 70%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const bottom = styled.div`
  position: absolute;
  width:100%;
  height:50%;
  bottom:0;
  padding:20px;
`

export const title=styled.h4`
  font-weight:600;

`

export const date = styled.p`
  font-size:16px;
`

export const go = styled.button`
  width:100px;
  height:40px;
  background-color:#000;
  border-radius:10px;
  color:#fff;
`