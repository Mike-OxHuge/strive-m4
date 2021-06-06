import { Component } from "react";
import {Card, Container, Row, Col} from 'react-bootstrap'

class Carousel extends Component {
  state = {
    movies: [],
  };
  componentDidMount = async () => {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=2bc5c486&s=${this.props.searchQuery}`
    );
    let movies = await response.json();
    this.setState({
      movies: movies.Search,
    });
  };
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <Container fluid>
          <Row>
              {this.state.movies.map((movie) => (
                  <Col className='col-sm-6 col-md-3 col-lg-2 m-2'>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                          <Card.Title>{movie.Title}</Card.Title>
                          <Card.Text>
                            {movie.Year}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Carousel;
