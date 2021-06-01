import { Component } from "react";
import { Card, Container } from "react-bootstrap";
import LatestReleases from "./WelcomeLatestReleases";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className="welcome">
        <Card style={{ width: "100vw" }}>
          <Card.Body>
            <Card.Title>Welcome</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              To the book store
            </Card.Subtitle>
            <Card.Text>Or whatever the hell are we having over here</Card.Text>
            <Container>
              <LatestReleases />
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Welcome;
