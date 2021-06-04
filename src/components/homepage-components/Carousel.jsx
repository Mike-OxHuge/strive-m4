import { Component } from "react";
class Carousel extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <h2>{this.props.searchQuery}</h2>
      </>
    );
  }
}

export default Carousel;
