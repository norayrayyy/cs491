import React from 'react';
import { Nav, Navbar, Container, } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const NavigationBar = () => {
    return (
        <Navbar expand="lg" bg="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">ReactHobbies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex gap-2">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
                 </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavigationBar;