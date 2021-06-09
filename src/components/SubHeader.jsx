// import { Component } from "react";
import { Container, Row, Col, Button, DropdownButton } from "react-bootstrap";
import { BsGrid, BsTextLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {
  const [genre, setGenre] = useState("Genre");
  const [searchResult, setSearchResult] = useState([]); // i could nest a child inside here and render these movies

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
              <span className="dropdown-item" onClick={() => setGenre("Drama")}>
                Drama
              </span>

              <span
                className="dropdown-item"
                onClick={() => setGenre("Comedy")}
              >
                Comedy
              </span>

              <span
                className="dropdown-item"
                onClick={() => setGenre("Romance")}
              >
                Romance
              </span>

              <span className="dropdown-item" onClick={() => setGenre("Scifi")}>
                Scifi
              </span>

              <span
                className="dropdown-item"
                onClick={() => setGenre("Fantasy")}
              >
                Fantasy
              </span>

              <span
                className="dropdown-item"
                onClick={() => setGenre("Documentary")}
              >
                Documentary
              </span>

              <span
                className="dropdown-item"
                onClick={() => setGenre("Family")}
              >
                Family
              </span>

              <span
                className="dropdown-item"
                onClick={() => setGenre("Action")}
              >
                Action
              </span>
            </DropdownButton>
          </Col>
          <Col className="col-4">
            <BsGrid />
            <BsTextLeft />
            {genre !== "Genre" ? (
              <Button variant="info">
                <Link to={`/browse/${genre}`}>Render {genre} movies! </Link>
              </Button>
            ) : (
              <div></div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubHeader;
