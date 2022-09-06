import React from "react";
import List from "../components/List";
import Auth from "../utils/auth";

const Home = () => {
  if (Auth.loggedIn()) {
    return (
      <div>
        <List />
      </div>
    );
  } else {
    return (
      <div>
        Sign-Up
      </div>
    )
  }

};

export default Home;
