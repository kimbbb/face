import styled from "styled-components";
import face from "../image/writing.svg"
import hover from "../image/hover.png"
import { useNavigate } from "react-router-dom";

const BtnBox=styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  &:hover .hover{
    display:block;
  }
`

const Btn=styled.button`
  background-image:url(${face});
  width: 110px;
  height: 110px;
  border: none;
  background-color: #0000;
`

const Hover=styled.img`
  position: absolute;
  right: 100%;
  top: 28%;
  display:none;
  height: 50px;
`

function Button() {

  let navigate=useNavigate();

  return(
    <>
    <BtnBox onClick={()=>{navigate('/writing')}}>
      <Btn/>
      <Hover className='hover' src={hover}/>
    </BtnBox>
    </>
  )
}

export default Button;