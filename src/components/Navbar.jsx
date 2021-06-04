import { IoSearchSharp } from 'react-icons/AiOutlineFileSearch '
import {Nav,Navbar,Container,Dropdown} from 'react-bootstrap'
import "../App.css"
const NavBar =()=>  {
  

    return (
      
      <>
     <Navbar  expand="lg" id='navbar'>
  <Container fluid>
    <Navbar.Brand href="#home"><img src="../assets/logo.png" alt="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" id='navbar'>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">TV Shows</Nav.Link>
        <Nav.Link href="#link">Movies</Nav.Link>
        <Nav.Link href="#link">Recently Added</Nav.Link>
       
      </Nav> 
      <div className='ml-auto d-flex align-items-center ' >
      
       <IoSearchSharp/>?
          <a  href="#">
                  Kids   
                </a>
               
           
                <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      <img src="../assets/kids_icon.png" alt="img" />
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#" active>
        Add User
      </Dropdown.Item>
      <Dropdown.Item href="#">Kids</Dropdown.Item>
      
      <Dropdown.Divider />
      <Dropdown.Item href="#">Log out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
                 
              
                
               
              
         </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
      
      
    )
  }


export default NavBar;
