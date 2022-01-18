import React from "react";
import { Link } from "react-router-dom";

const GuestHomePage = () => {
  return (
    <div className="guesthomecontainer">
      <Link to="/products">
        <div id="products"> Products </div>
      </Link>
    </div>
  );
};

export default GuestHomePage;
