const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Venue {
    _id: ID!
    userName: String!
    email: String!
    password: String!
    type: String!
    location: String!
    capacity: Int!
    number: String
    socials: String
  }
  type Artist {
    _id: ID!
    userName: String!
    email: String!
    password: String!
    genre: String!
    groupNumber: Int
    link: String
    number: String
  }
  type Auth {
    token: ID!
    artist: Artist
    venue: Venue
  }
  type Query {
    artists: [Artist]
    venues: [Venue]
    artist: Artist
    venue: Venue
  }
  type Mutation {
    artistLogin(userName: String!, password: String!): Auth
    venueLogin(userName: String!, password: String!): Auth
    addVenue(
      userName: String!
      type: String!
      password: String!
      location: String!
      capacity: Int!
      Number: String
      email: String
      socials: String
    ): Auth
    addArtist(
      userName: String!
      genre: String!
      password: String!
      groupNumber: Int!
      link: String
      Number: String
    ): Auth
  }
`;

module.exports = typeDefs;
