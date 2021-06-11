import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <a href="/home/trending">
        <img src={logo} style={{ maxWidth: "100%" }} alt="logo" />
      </a>
    </>
  );
};

export default Logo;
