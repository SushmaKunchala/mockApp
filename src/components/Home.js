import React from 'react'
import {Row,Col,Container,Navbar,Nav,Button,NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';
function Home() {
    
  return (
     
<div>
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
       <Link to="Login"> <Nav.Link href="#link">Login</Nav.Link></Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<img src="edu.avif" alt="" width="100%" height="420px"/>

    <div className="text-center description mb-4">
        <h1 className="title mb-4">OUR VISION</h1>
        <p>We are working to transform the school education system in India to improve the learning outcomes of all
            children, especially from low-income communities. To achieve our goal, we provide support and partner with
            organizations working on innovative solutions in education, as well engage with the system to drive
            sustainable and positive impact. We also collaborate with other ecosystem stakeholders to build research and
            create effective proven tools around critical issues. </p>
    </div>

    <div className="modules">
        <div className="card">
            <button className="btn btn-dark"><a href="#"> Modules <i className='fas fa-arrow-right'></i></a></button>
        </div>
    </div>
</div>
    
  )
}

export default Home;
