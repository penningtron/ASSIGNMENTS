/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet, Link } from 'react-router-dom';


function NavMain() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Link to="/home">Rick and Morty </Link>
      <Link to="/about"> About </Link>
      <Link to="/characters"> Characters </Link>
      <Link to="/episodes"> Episodes </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMain;