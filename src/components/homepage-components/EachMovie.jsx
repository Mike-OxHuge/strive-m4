import { Component } from "react";
import { Card } from "react-bootstrap";
import Comments from "./Comments";
class EachMovie extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        style={{
          width: "auto",
          transform: this.state.selected ? "scale(0.8)" : "none",
        }}
        className="my-3 mx-2"
      >
        <Card.Img
          variant="top"
          src={this.props.movie.Poster}
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ maxWidth: "100%", maxHeight: "50%" }}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>{this.props.movie.Title}</Card.Title>
          <Card.Text>{this.props.movie.Year}</Card.Text>
          {this.state.selected && <Comments id={this.props.movie.imdbID} />}
          {!this.state.selected && (
            <span className="mt-5">Click the poster to see comments</span>
          )}
        </Card.Body>
        {/* <Card.Footer>
          
        </Card.Footer> */}
      </Card>
    );
  }
}

export default EachMovie;
