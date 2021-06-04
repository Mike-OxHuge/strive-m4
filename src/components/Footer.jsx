import { Component } from "react";
import {Container, Row, Col, ListGroup } from 'react-bootstrap'
import { IoLogoInstagram, IoLogoFacebook,IoLogoTwitter,IoLogoYoutube } from "react-icons/io5"
import "../App.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <Container fluid className='footer'>
          <div className="wrapper">
            <Row>
              <IoLogoFacebook/>
              <IoLogoInstagram/>
              <IoLogoTwitter/>
              <IoLogoYoutube/>
            </Row>
            <Row className='listitems'>
              <Col className ='col-3'>
                <ListGroup style={{border: 'none', color: 'white', }}>
                  <ListGroup.Item>Audio and Subtitles</ListGroup.Item>
                  <ListGroup.Item>Media Center</ListGroup.Item>
                  <ListGroup.Item>Privacy</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Contact us</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col className ='col-3'>
                <ListGroup>
                  <ListGroup.Item>Audio Description</ListGroup.Item>
                  <ListGroup.Item>Investor Relastions</ListGroup.Item>
                  <ListGroup.Item>Legal Notices</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col className ='col-3'>
                <ListGroup>
                  <ListGroup.Item>Help Center</ListGroup.Item>
                  <ListGroup.Item>Jobs</ListGroup.Item>
                  <ListGroup.Item>Cookie Preferences</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col className ='col-3'>
                <ListGroup>
                  <ListGroup.Item>Gift Cards</ListGroup.Item>
                  <ListGroup.Item>Term of Use</ListGroup.Item>
                  <ListGroup.Item>Corporate Information</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <h3>Service Code</h3>
            </Row>
            <Row>
              <p>© 1997-2021 Netflix inc. </p>
            </Row>
          </div>

          
        </Container>
      </>
    );
  }
}

export default Footer;
