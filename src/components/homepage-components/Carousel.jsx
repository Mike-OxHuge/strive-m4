import { Component } from "react";
import {Card, Container,Row, Col} from 'react-bootstrap'

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
        <Container className='d-flex'>
          <Row>
            {this.state.movies.map((movie) => (
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={movie.Poster} />
                      <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>
                          {movie.Year}
                        </Card.Text>
                      </Card.Body>
                    </Card>
              // <div key={movie.imdbID}>
              //   <span>{movie.Title}</span>
              // </div>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Carousel;
