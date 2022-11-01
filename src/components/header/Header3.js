import '../../style/header.css'
import Logo from "../../image/logo2.png"
import {Navbar, Nav, Container } from 'react-bootstrap';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';


function Header3() {

  let navigate=useNavigate();

  return(
    <>
      <Navbar expand="lg" style={{background:'rgb(0 48 96 / 66%)'}}>
        <Container className='header'>
          <Navbar.Brand href="/main"><img className='logo1' src={Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/diary') }}>다이어리</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }}>소개</Nav.Link>
            <Nav.Link className='out' onClick={()=>{navigate('/')}}>로그아웃</Nav.Link>        
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header3;