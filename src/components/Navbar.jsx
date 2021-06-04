import { Component } from "react";
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap'
const NavBar =()=>  {
  

    return (
      
      <>
     <Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home"><img src="../assets/logo.png" alt="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">TV Shows</Nav.Link>
        <Nav.Link href="#link">Movies</Nav.Link>
        <Nav.Link href="#link">Recently Added</Nav.Link>
       
      </Nav> 
      <div className='ml-auto'>
          
        
        <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
         </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
      
      
    )
  }


export default NavBar;
