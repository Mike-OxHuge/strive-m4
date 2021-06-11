import { useState, useEffect } from "react";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import SingleTrack from "./album-components/SingleTrack";
const ArtistPage = ({ match }) => {
  const [artist, setArtist] = useState(null);
  const [tracklist, setTracklist] = useState([]);
  useEffect(() => {
    const fetching = async function () {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${match.params.artistID}`
      );
      let artistData = await response.json();
      setArtist(artistData);
    };
    fetching();
  }, [match]);

  useEffect(() => {
    const fetching = async function () {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${match.params.artistID}/top?limit=50`
      );
      let tracks = await response.json();
      setTracklist(tracks.data);
    };
    fetching();
  }, [match]);
  return (
    <>
      {artist === null ? (
        <Spinner animation="border" role="status" />
      ) : (
        <Container>
          <Row>
            <Col xs={5}>
              <h2>{artist.name}</h2>
              <img
                src={artist.picture_medium}
                alt={artist.name + "image"}
                style={{ maxWidth: "70%" }}
              />
            </Col>
            <Col xs={7}>
              <SingleTrack tracklist={tracklist} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ArtistPage;
