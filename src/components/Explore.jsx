import { useState, useEffect } from "react";
import { Spinner, Container, Row, Col, Card } from "react-bootstrap";
const Explore = ({ match, location, history }) => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    setTracks([]);
    const fetching = async function () {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${match.params.explore}`
      );
      let tracksData = await response.json();

      setTracks(tracksData.data);
    };
    fetching();
  }, [match, location, history]);

  const redirect = async function (e) {
    history.push(`/albums/${e.target.id}`);
  };
  return (
    <>
      {" "}
      <br />
      {tracks.length === 0 ? (
        <div style={{ position: "absolute", top: "30vh", left: "50%" }}>
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <Container>
          <Row>
            {tracks.map((track) => (
              <Col xs={3} key={track.id} onClick={(e) => redirect(e)}>
                <Card key={track.id}>
                  <span id={track.album.id} key={track.id}>
                    {track.title}
                  </span>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Explore;
