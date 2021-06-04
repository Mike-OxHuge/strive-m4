import { Component } from "react";
import { Form, Card } from "react-bootstrap";
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
    // this.setState({
    //   movies: movies.Search,
    // });
    console.log(movies.Search);
  };

  render() {
    return (
      <div className="mt-5">
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search movie"
            value={this.state.searchQuery}
            onChange={(e) =>
              this.setState({
                searchQuery: e.target.value,
              })
            }
          />
        </Form.Group>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SearchBar;
