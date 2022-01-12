import React from "react";
import { Link } from "react-router-dom";

const GuessHomePage = () => {
  return (
    <div className="GuessHomeContainer">
      <Link to="/posters">
        <div id="posters"> Posters </div>
      </Link>
    </div>
  );
};

export default GuessHomePage;
