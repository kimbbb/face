import React from "react";
import styled from "styled-components";
import Limg from '../../image/loading.png'
import Licon from '../../image/Licon.png'

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

function Loading() {
  return(
    <>
    <Load src={Limg}/>
    <Icon src={Licon}/>
    </>
  )
}

export default Loading;