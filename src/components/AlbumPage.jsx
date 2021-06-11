import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Album from "./album-components/Album";
const AlbumPage = ({ match }) => {
  const [albums, setAlbums] = useState(null);
  useEffect(() => {
    const fetching = async function () {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${match.params.album}`
      );
      let albumsData = await response.json();
      setAlbums(albumsData);
    };
    fetching();
  }, [match]);
  return (
    <>
      {albums === null ? (
        <Spinner animation="border" role="status" />
      ) : (
        <Album album={albums} />
      )}
    </>
  );
};

export default AlbumPage;
