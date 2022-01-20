import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import store from "../store";


const isAdmin = () => {
  const user = store.getState().auth
  if (user.isAdmin === true) {
    return true
  } else {
    return false
  }
}

const Navbar = ({ handleClick, isLoggedIn}) => (
  <div className="nav_bar">
    <h1>
      <Link to="/home">The Super Store</Link>
    </h1>
    <nav className="nav_bar-links">
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to={`/cart`}>Cart</Link>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
      {isAdmin()?<Link to="/admin">Admin Page</Link> :<a>not admin</a>}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  console.log('state', state)
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
