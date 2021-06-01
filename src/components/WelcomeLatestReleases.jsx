import { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import fantasy from "../data/fantasy";
class LatestReleases extends Component {
  state = {};
  render() {
    return (
      <Row>
        {fantasy.map((book) => (
          <Col className="my-2" xs={12} md={6} lg={4} xl={3} key={book.asin}>
            <Card>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {book.category}
                </Card.Subtitle>
                <Card.Img variant="top" src={book.img} />
                <Card.Link href="#">Buy now for ${book.price}</Card.Link>
                <br />
                <Card.Link href="#">Add to cart</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default LatestReleases;
