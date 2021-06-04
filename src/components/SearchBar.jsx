import { Component } from "react";
import { Form } from "react-bootstrap";
class SearchBar extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  componentDidUpdate = async () => {
    console.log("Fetching data...");
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=2bc5c486&s=${this.state.searchQuery}`
    );
    let movies = await response.json();
    console.log(
      `The search result for a query of ${this.state.searchQuery} are:`
    );
    console.log(movies.Search);
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
