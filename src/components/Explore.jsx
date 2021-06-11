import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
const Explore = ({ match }) => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    const fetching = async function () {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${match.params.explore}`
      );
      let tracksData = await response.json();
      setTracks(tracksData.data);
    };
    fetching();
  }, [match]);
  return (
    <>
      {tracks.length === 0 ? (
        <Spinner animation="border" role="status" />
      ) : (
        tracks.map((track) => <h5 key={track.id}>{track.title}</h5>)
      )}
    </>
  );
};

export default Explore;
