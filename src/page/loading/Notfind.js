import React from "react";
import styled from "styled-components";
import Loading from '../../image/loading.png';
import No from '../../image/not.png';

const Load = styled.img`
  width:100%;
  height:100vh;
  position:absolute;
`

const Icon = styled.img`
  position:absolute;
  width:80%;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
`

function Notfind() {
  return(
    <>
      <Load src={Loading}/>
      <Icon src={No}/>
    </>
  )
}

export default Notfind;