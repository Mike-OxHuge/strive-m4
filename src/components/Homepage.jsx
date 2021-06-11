import { Link } from "react-router-dom";
import Explore from "./Explore";
import ButtonLink from "./ButtonLink";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import AlbumPage from "./AlbumPage";
import ArtistPage from "./ArtistPage";

const Homepage = (location, history, match) => {
  //   const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (location.location.pathname === "/") {
      console.log("test");
    }
  }, [location.history, location.location.pathname]);
  return (
    <>
      <Router>
        <ButtonLink text="TRENDING" />
        <ButtonLink text="PODCAST" />
        <ButtonLink text="MOODS AND GENRES" />
        <ButtonLink text="NEW RELEASES" />
        <ButtonLink text="DISCOVER" />
        <Route
          path="/home/:explore"
          render={(routerProps) => <Explore {...routerProps} />}
        />
        <Route
          exact
          path="/albums/:album"
          render={(routerProps) => <AlbumPage {...routerProps} />}
        />
        <Route
          path="/artist/:artistID"
          render={(routerProps) => <ArtistPage {...routerProps} />}
        />
      </Router>
    </>
  );
};

export default withRouter(Homepage);
