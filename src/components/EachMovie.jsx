import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Comments from "./Comments";

const EachMovie = ({ movie }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      style={{
        width: "auto",
        transform: selected ? "scale(0.8)" : "none",
      }}
      className="my-3 mx-2"
    >
      <Card.Img
        variant="top"
        src={movie.Poster}
        onClick={() => setSelected(!selected)}
        style={{ maxWidth: "100%", maxHeight: "50%" }}
        className="img-fluid"
      />
      <Link to={`/${movie.imdbID}`}>
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Year}</Card.Text>
          {/* {selected && <Comments id={movie.imdbID} />}
        {!selected && (
            <span className="mt-5">Click the poster to see comments</span>
        )} */}
        </Card.Body>
      </Link>
      {/* <Card.Footer>
          
        </Card.Footer> */}
    </Card>
  );
};

export default EachMovie;
