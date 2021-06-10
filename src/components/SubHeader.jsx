// import { Component } from "react";
import { Container, Row, Col, DropdownButton } from "react-bootstrap";
import { BsGrid, BsTextLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const SubHeader = ({ history }) => {
  const [genre, setGenre] = useState("Genre");
  const [searchResult, setSearchResult] = useState([]); // i could nest a child inside here and render these movies
  const [genres, setGenres] = useState([
    "Action",
    "Drama",
    "Comedy",
    "Romance",
    "Scifi",
    "Fantasy",
    "Documentary",
    "Family",
  ]);

  useEffect(() => {
    let request = async function () {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=2bc5c486&s=${genre}`
      );
      let movies = await response.json();
      setSearchResult(movies.Search);
    };
    request();
  }, [genre]);

  const redirect = async function (e) {
    await setGenre(e.target.innerText);
    history.push(`/browse/${e.target.innerText}`);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="col-8 d-flex justify-content-center">
            <h1 className="mr-5">TV SHOWS</h1>
            <DropdownButton
              id="dropdown-basic-button"
              title={genre}
              variant="dark"
            >
              {genres.map((item) => (
                <div key={item.imdbID}>
                  <span className="dropdown-item" onClick={(e) => redirect(e)}>
                    {item}
                  </span>
                </div>
              ))}
            </DropdownButton>
          </Col>
          <Col className="col-4">
            <BsGrid />
            <BsTextLeft />
            <Link to="/registration">
              {" "}
              <span>register</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(SubHeader);
