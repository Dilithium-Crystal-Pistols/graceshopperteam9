import React from "react";
import { Link } from "react-router-dom";

const GuessHomePage = () => {
  return (
    <div className="guesshomecontainer">
      <Link to="/posters">
        <div id="posters"> Products </div>
      </Link>
    </div>
  );
};

export default GuessHomePage;
