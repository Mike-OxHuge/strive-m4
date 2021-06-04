import { FaSearch } from "react-icons/fa";
import {BsBellFill} from "react-icons/bs";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import logo from '../assets/logo.png'
import icon from '../assets/kids_icon.png'
import "../assets/navbar.css";
const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" id="navbar" className='fixed-top'>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" id="navbar1"  className='logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link id="navbar" href="#home">Home</Nav.Link>
              <Nav.Link id="navbar" href="#link">TV Shows</Nav.Link>
              <Nav.Link id="navbar" href="#link">Movies</Nav.Link>
              <Nav.Link id="navbar" href="#link">Recently Added</Nav.Link>
            </Nav>
            <div className="ml-auto d-flex align-items-center">
              <FaSearch />
              <a id="navbar1" href="#kids" className='mx-2'>Kids </a>
              <BsBellFill/>
              <Dropdown >
                <Dropdown.Toggle
                    
                    title="Dropdown right"
                    id="dropdown-menu-align-right"
                  className='dropdown'
                >
                  <img src={icon} alt="img" className='icon'/>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="" className='smallMenu'>
                  <Dropdown.Item href="#"  className='smallMenu'>
                    Add User
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className='smallMenu'>Kids</Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item href="#" className='smallMenu'>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
