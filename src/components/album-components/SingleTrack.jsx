import { Link } from "react-router-dom";
const SingleTrack = ({ tracklist }) => {
  return (
    <>
      {tracklist.map((track) => (
        <p key={track.id}>
          {track.title} by{" "}
          <Link to={`/artist/${track.artist.id}`}>{track.artist.name}</Link>
        </p>
      ))}
    </>
  );
};

export default SingleTrack;
