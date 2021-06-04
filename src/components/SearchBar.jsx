import { Component } from "react";
import { Form } from "react-bootstrap";
class SearchBar extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  render() {
    return (
      <div>
        <Form.Group controlId="formGroupEmail">
          {/* <Form.Label>Search</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Search movie"
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
        </Form.Group>
      </div>
    );
  }
}

export default SearchBar;
