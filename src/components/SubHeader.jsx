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
    CurrentGenre: "",
  };

  // componentDidMount = async () => {
  //   let response = await fetch(
  //     `https://www.omdbapi.com/?apikey=2bc5c486&s=${this.state.CurrentGenre}`
  //   );
  //   let genres = await response.json();
  // };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col className="col-8 d-flex justify-content-center">
              <h1 className="mr-5">TV SHOWS</h1>
              <DropdownButton
                id="dropdown-basic-button"
                title="Genres"
                variant="dark"
              >
                {this.state.genres.map(
                  (genre) => (
                    <Dropdown.Item href="#/action-1">{genre}</Dropdown.Item>
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
