import React from "react";
import '../Nav/index.css'

function List() {
  return (
    <div>
      <h1>Login or signup to get a gig scheduled!</h1>
      <a href="/venues">
        <button>Find Venues</button>
      </a>
      <a href="/artists">
        <button>Find Artists</button>
      </a>
    </div>
  );
}

export default List;
