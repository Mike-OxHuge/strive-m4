import { useState, useEffect } from "react";

import { Container, Row } from "react-bootstrap";

import EachMovie from "./EachMovie";

const Carousel = ({ searchQuery, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetching = async function () {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=2bc5c486&s=${searchQuery}`
      );
      let movies = await response.json();
      setMovies(movies.Search);
    };
    fetching();
  }, [searchQuery]);
  return (
    <>
      <h1>{title}</h1>

      <Container className="d-flex">
        <Row>
          {movies.map((movie) => (
            <EachMovie movie={movie} key={movie.imdbID} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Carousel;
