const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    email: String!
    password: String!
    savedArtists: [Artist]
    savedVenues: [Venue]
  }

  type Artist {
    name: String!
    genre: String!
    groupSize: Int!
    link: String
  }

  type Venue {
    _id: ID
    name: String!
    type: String!
    capacity: Int!
    number: String!
    location: String!
    website: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]
    artist: [Artist]
    venue: [Venue]
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
