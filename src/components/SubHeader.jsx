import { Component } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { BsGrid, BsTextLeft } from "react-icons/bs";

class SubHeader extends Component {
  state = {
    genres: [
      "Action",
      "Drama",
      "Comedy",
      "Romance",
      "Scifi",
      "Fantasy",
      "Documentary",
      "Family",
    ],
    CurrentGenre: "Genres",
  };

  // componentDidMount = async () => {
  //   let response = await fetch(
  //     `https://www.omdbapi.com/?apikey=2bc5c486&s=${this.state.CurrentGenre}`
  //   );
  //   let genres = await response.json();
  // };
  componentDidUpdate = async () => {
    console.log("Fetching data...");
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=2bc5c486&s=${this.state.CurrentGenre}`
    );
    let genres = await response.json();
    console.log(
      `The search result for a query of ${this.state.CurrentGenre} are:`
    );
    console.log(genres.Search);
  };
  selecting = async (e) => {
    this.setState({
      CurrentGenre: e.target.innerText,
    });
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col className="col-8 d-flex justify-content-center">
              <h1 className="mr-5">TV SHOWS</h1>
              <DropdownButton
                id="dropdown-basic-button"
                title={this.state.CurrentGenre}
                variant="dark"
              >
                {this.state.genres.map(
                  (genre) => (
                    <Dropdown.Item
                      key={genre}
                      onClick={(e) => this.selecting(e)}
                    >
                      {genre}
                    </Dropdown.Item>
                  )
                  // this..setState({
                  //   CurrentGenre: `${genre}`
                  // })
                )}
              </DropdownButton>
            </Col>
            <Col className="col-4">
              <BsGrid />
              <BsTextLeft />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SubHeader;
