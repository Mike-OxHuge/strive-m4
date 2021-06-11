import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ButtonLink = ({ text }) => {
  return (
    <>
      <Link to={`home/${text.toLowerCase()}`}>
        <span>{text}</span>
      </Link>
    </>
  );
};

export default ButtonLink;
