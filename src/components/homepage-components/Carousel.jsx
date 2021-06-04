import { Component } from "react";
import { Container, Row } from "react-bootstrap";

import EachMovie from "./EachMovie";

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
        <Container className="d-flex">
          <Row>
            {this.state.movies.map((movie) => (
              <EachMovie movie={movie} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Carousel;
