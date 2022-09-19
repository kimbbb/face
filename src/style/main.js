import styled from "styled-components";

export const main=styled.div`
  width:100%;
`

export const mainBox=styled.div`
  position: absolute;
  top: 20%;
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



