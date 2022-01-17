import React from "react";
import { Link } from "react-router-dom";

const GuestHomePage = () => {
  return (
    <div className="guesthomecontainer">
      <Link to="/posters">
        <div id="posters"> Posters </div>
      </Link>
    </div>
  );
};

export default GuestHomePage;
