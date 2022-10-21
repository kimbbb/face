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

const Bg = styled.div`
 animation: fadein 3s;
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s; 
  -o-animation: fadein 3s; 
  @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
  @-moz-keyframes fadein { /* Firefox */
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
  @-webkit-keyframes fadein { /* Safari and Chrome */
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
  @-o-keyframes fadein { /* Opera */
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
`

function Loading() {
  return(
    <>
    <Bg>
      <Load src={Limg}/>
      <Icon src={Licon}/>
    </Bg>
    </>
  )
}

export default Loading;