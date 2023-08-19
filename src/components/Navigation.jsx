import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to ='/home' className='slider-heading'>
        Digital Marketing Co.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to ='/home'>Home</Nav.Link>
          <Nav.Link as={Link} to ='/about'>About</Nav.Link>
          <Nav.Link as={Link} to ='/services'>Services</Nav.Link>
          <Nav.Link as={Link} to ='/career'>Career</Nav.Link>
          <Nav.Link as={Link} to ='/life'>Life @</Nav.Link>
          <Nav.Link as={Link} to ='/contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}