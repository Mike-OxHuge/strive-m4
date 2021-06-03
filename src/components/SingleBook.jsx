// Create a SingleBook component as a function.
// The component receives a book object as a prop, and displays
// the cover and the title of the book. Use react-bootstrap Cards to display a book
// (The book object can be read from one of the .json
// book files we gave you yesterday).

/* book json can be found in data folder */
import { Card } from "react-bootstrap";
import MyBadge from "./MyBadge";
import { Component } from "react";
import Comments from "./Comments";

class SingleBook extends Component {
  state = {
    selected: false,
    apiKey: "",
  };

  componentDidMount = () => {
    // console.log(this.props.apiKey);
  };
  render() {
    const mystyle = {
      position: "absolute",
      top: "20%",
      right: "0",
    };
    return (
      <>
        <Card
          className="h-100"
          onClick={() => this.setState({ selected: true })}
          style={{ transform: this.state.selected ? "scale(0.8)" : "none" }}
        >
          <Card.Img
            className="w-100"
            variant="top"
            src={this.props.book.img}
            style={{ height: "300px" }}
          />
          <MyBadge
            style={mystyle}
            text={this.props.book.price}
            color="warning"
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            {this.state.selected && (
              <Comments book={this.props.book} apiKey={this.props.apiKey} />
            )}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
