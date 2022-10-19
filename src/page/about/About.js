import Header from '../../components/header/Header3';
import aboutimg from '../../image/about.svg'
import Button from '../../components/Button.js';
import styled from 'styled-components';

const Aboutbg = styled.img`
  width:100%;
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

function About() {
  return(
    <>
    <Header/>
      <Aboutbg src={aboutimg}/>
    <Button/>
    </>
  )
}

export default About;