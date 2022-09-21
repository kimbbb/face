import '../../style/header.css'
import Logo from "../../image/logo1.png"
import {Navbar, Nav, Container } from 'react-bootstrap';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';


function Header() {

  let navigate=useNavigate();

  return(
    <>
      <Navbar style={{background:'#fff'}}>
          <Container classNamr='header'>
          <Navbar.Brand href="/"><img className='logo1' src={Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/writing') }}>다이어리</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }}>소개</Nav.Link>
            <div id='log' >
            <Nav.Link onClick={()=>{ navigate('/login') }}>로그인</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/signup') }}>회원가입</Nav.Link> 
            </div>         
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  )
}

export default Header;