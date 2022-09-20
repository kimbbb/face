import Header from '../../components/header/Header3';
import aboutimg from '../../image/about.svg'

function About() {
  return(
    <>
    <Header/>
    <img style={{width: '100%'}} src={aboutimg}/>
    </>
  )
}

export default About;