import React from 'react';
import "../../styles/HeaderStyle.css"
import {Container, Nav , Navbar} from "react-bootstrap";

function Header() {
  return (
    <>
     <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
          
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
