import React from "react";
import Auth from "../../utils/auth";
import { Link, renderMatches } from "react-router-dom";
import '../Nav/index.css'

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
        return (
        <div className = "signin-2">
        <ul className="login-list">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        </div>
      );
    }
  }

  return (
    <header>
      <h1 className="title">
        <Link to="/">
          <span role="img"></span>
          Music Mingle
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
