// design only the header area

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <>
       <Navbar expand="lg" className="bg-primary py-3">
      <Container>
        <img src="/logo_hire-removebg-preview.png" alt="Logo" height={'70px'}/>
        <Navbar.Brand className='fw-bold'>QuickHire</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Button variant="danger" className=' w-100'>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
