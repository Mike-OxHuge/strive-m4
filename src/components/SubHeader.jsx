import { Component } from "react";
import {Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap'
import { BsGrid, BsTextLeft } from "react-icons/bs"

class SubHeader extends Component {
  state = {};
  render() {
    return (
      <> 
        <Container>
          <Row>
            <Col className = 'col-8 d-flex justify-content-center'>
              <h1 className = 'mr-5'>TV SHOWS</h1>
              <DropdownButton id="dropdown-basic-button" title="Genres">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col className='col-4'>
              <BsGrid/>
              <BsTextLeft/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SubHeader;
