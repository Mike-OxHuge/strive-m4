import { Link } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { useState } from "react";
const Homepage = () => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <ButtonLink text="TRENDING" />
      <ButtonLink text="PODCAST" />
      <ButtonLink text="MOODS AND GENRES" />
      <ButtonLink text="NEW RELEASES" />
      <ButtonLink text="DISCOVER" />
    </>
  );
};

export default Homepage;
