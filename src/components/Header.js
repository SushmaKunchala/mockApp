import React from "react";
import {Row,Col,Container,Navbar,Nav,Button,NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';

function Header()
{
    return <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">KEF</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         <Link to="Login"> <Nav.Link href="#link">Login</Nav.Link></Link>
         <Link to="videos"> <Nav.Link href="#link">Recordings</Nav.Link></Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
}

export default Header;