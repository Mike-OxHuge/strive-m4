import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const BrowseResult = ({ match }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetching = async function () {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=2bc5c486&s=${match.params.genre}`
      );
      let moviesData = await response.json();
      setMovies(moviesData.Search);
    };
    fetching();
  }, [match]);
  return (
    <>
      {movies.length === 0 ? (
        <Spinner animation="border" role="status" />
      ) : (
        movies.map((movie) => <h1>{movie.Title}</h1>)
      )}
    </>
  );
};

export default BrowseResult;
