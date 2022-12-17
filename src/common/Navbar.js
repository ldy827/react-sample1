import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavbarCommon() {
  let navigate = useNavigate();

  return (
    // create bootstrap navbar with logo and it compse 3 components
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCommon;