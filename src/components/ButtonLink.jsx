import { Link, withRouter } from "react-router-dom";
const ButtonLink = ({ text, location }) => {
  return (
    <>
      <Link to={`/home/${text.toLowerCase()}`}>
        {location.pathname.includes(text.toLowerCase()) ? (
          <span style={{ color: "red" }}>{text}</span>
        ) : (
          <span>{text}</span>
        )}
      </Link>
    </>
  );
};

export default withRouter(ButtonLink);
