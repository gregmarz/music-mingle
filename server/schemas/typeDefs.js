const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    email: String!
  }

  type:Artist {
    _id: ID
    name:String!
    genre:String
    groupSize:Number!
    link:String
  }

  type:Venue {
    name:String!
    type:String!
    capacity:Number!
    location:String!
    website:String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
