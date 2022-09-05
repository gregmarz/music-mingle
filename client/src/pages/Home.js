import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <form className="arist-login">
          <h2>Artist Login</h2>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              className="form-label"
              placeholder="username"
            ></input>
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="text"
              className="form-label"
              placeholder="email"
            ></input>
          </div>
          <button>Submit</button>
        </form>
        <form>
          <h2>Venue Login</h2>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              className="form-label"
              placeholder="username"
            ></input>
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="text"
              className="form-label"
              placeholder="email"
            ></input>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
