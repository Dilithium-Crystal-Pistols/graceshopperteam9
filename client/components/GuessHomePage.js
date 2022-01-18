import React from "react";
import { Link } from "react-router-dom";

const GuessHomePage = () => {
  return (
    <div className="homecontainer">
      <div className="home_header">
        <Link to="/posters">
          <h2>Shop Now</h2>
        </Link>
      </div>

      <div className="home_products">
        <Link to="/posters">
          <div id="posters"> Products </div>
        </Link>

        <Link to="/posters">
          <div id="posters"> Products </div>
        </Link>

        <Link to="/posters">
          <div id="posters"> Products </div>
        </Link>

        <Link to="/posters">
          <div id="posters"> Products </div>
        </Link>
      </div>
    </div>
  );
};

export default GuessHomePage;
