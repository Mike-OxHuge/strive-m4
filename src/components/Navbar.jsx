import { FaSearch } from "react-icons/fa";
import {BsBellFill} from "react-icons/bs";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import "../App.css";
const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" id="navbar">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src="./logo.png" alt="logo" id="navbar1" />
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
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
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
  );
};

export default NavBar;
