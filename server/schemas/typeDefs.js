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
    _id: ID!
    name: String!
    genre: String!
    groupSize: Int!
    link: String
  }

  type SavedArtist {
    _id: ID
    artists: [Artist]
  }

  type SavedVenue {
    _id: ID
    venues: [Venue]
  }

  type Venue {
    _id: ID!
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
    artists(_id: String): [Artist]
    venues(_id: String): [Venue]
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveArtist(artists: [ID]!): Artist
    saveVenue(venues: [ID]!): Venue
  }
`;

module.exports = typeDefs;
