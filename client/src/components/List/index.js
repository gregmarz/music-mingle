import React from "react";
import '../Nav/index.css';
import Auth from "../../utils/auth";

function List() {
  if (Auth.loggedIn()) {
    return (
      <div>
        <h1>Check out our artists and venues!</h1>
        <div className="find-buttons">
        <a className="button" href="/venues">
          <button>Find Venues</button>
        </a>
        <a className="button" href="/artists">
          <button>Find Artists</button>
        </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>Welcome to Music Mingler, Sign-In!</div>
    )
  }
}

export default List;
