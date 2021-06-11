import { Container, Row, Col } from "react-bootstrap";
import SingleTrack from "./SingleTrack";
const Album = ({ album }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={7}>
            <img
              src={album.cover_medium}
              alt={album.title + " " + album.artist.name}
              style={{ maxWidth: "50%" }}
            />
            <h3>{album.title}</h3>
            <h6>by</h6>
            <h4>{album.artist.name}</h4>
          </Col>
          <Col xs={5}>
            <SingleTrack tracklist={album.tracks.data} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Album;
