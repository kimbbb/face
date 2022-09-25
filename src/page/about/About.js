import Header from '../../components/header/Header3';
import aboutimg from '../../image/about.svg'
import Button from '../../components/Button.js';

function About() {
  return(
    <>
    <Header/>
    <img style={{width: '100%'}} src={aboutimg}/>
    <Button/>
    </>
  )
}

export default About;