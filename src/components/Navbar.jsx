
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
      <div className='ml-auto d-flex align-items-center dropdown-menu userDropdown' aria-labelledby="navbarDropdownMenuLink">
          
        <img src="./assets/kids_icon.png" alt="kidslogo" />
       
                <link className="dropdown-item" href="#">
                  Kids   <img class="kidsIcon" src="kids_icon.png" alt="kidsIcon">
                </link>
                <link className="addUser "href="profile.html"> Add User</link>
              
         </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
      
      
    )
  }


export default NavBar;
