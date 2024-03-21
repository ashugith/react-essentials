import React from 'react';
import "../../styles/HeaderStyle.css"
import {Container, Nav , Navbar  } from "react-bootstrap";
import {Link} from  "react-router-dom"
import Logo from '../../assets/logo/logo.png'

function Header() {
  return (
    <>
     <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <Link>
             <img src={Logo} alt="Logo" className="img-fluid"/>

          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
          
            <Nav.Link href="#features">Features</Nav.Link>
      
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          
          
              
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </>
  )
}

export default Header
