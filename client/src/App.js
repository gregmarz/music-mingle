import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from './utils/GlobalState';
import Home from "./pages/Home";
import Header from "./components/Header";
import ArtistLogin from "./pages/ArtistLogin";
/* import VenueLogin from "./pages/VenueLogin"; */
import ArtistSignup from "./pages/ArtistSignup";
/* import VenueSignup from "./pages/VenueSignup"; */

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <StoreProvider>
        <div className="App">
          <Header />
          <Routes>
           <Route 
                path="/artist-login" 
                element={<ArtistLogin />} 
              />
              <Route 
                path="/artist-signup" 
                element={<ArtistSignup />} 
              />
{/*                          <Route 
                path="/venue-login" 
                element={<VenueLogin />} 
              />
              <Route 
                path="/venue-signup" 
                element={<VenueSignup />} 
              /> */}
              </Routes>
              <Home />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
