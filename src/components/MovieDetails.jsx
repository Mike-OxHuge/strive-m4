import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetching = async function () {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=2bc5c486&i=${match.params.movieID}&plot=full`
      );
      let movie = await response.json();
      setMovie(movie);
    };
    fetching();
  }, [match]);
  return (
    <>
      <h1>Movie details page</h1>
      {movie === null ? (
        <Spinner animation="border" role="status" />
      ) : typeof movie === undefined ? (
        <h2>Movie not found</h2>
      ) : (
        <div>
          <h3>{movie.Genre}</h3>
          <h4>{movie.Title}</h4>
          <span>{movie.Year}</span>
          <p>{movie.Plot}</p>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
