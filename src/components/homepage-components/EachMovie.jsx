import { Component } from "react";
import { Card } from "react-bootstrap";
import Comments from "./Comments";
class EachMovie extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card style={{ width: "auto" }}>
        <Card.Img
          variant="top"
          src={this.props.movie.Poster}
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ transform: this.state.selected ? "scale(0.8)" : "none" }}
        />
        <Card.Body>
          <Card.Title>{this.props.movie.Title}</Card.Title>
          <Card.Text>{this.props.movie.Year}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {this.state.selected && <Comments id={this.props.movie.imdbID} />}
        </Card.Footer>
      </Card>
    );
  }
}

export default EachMovie;
