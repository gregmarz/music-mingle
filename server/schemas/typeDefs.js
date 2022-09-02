const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Venue {
    _id: ID!
    name: String!
    type: String!
    password: String!
    location: String!
    capacity: Int!
    number: String
    email: String
    socials: String
}
type Artist {
    _id: ID!
    name: String!
    genre: String!
    password: String!
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
    login(name: String!, password: String!): Auth
    addVenue(name: String!, type: String!, password: String!, location: String!, capacity: Int!, Number: String, email: String, socials: String): Auth
    addArtist(name: String!, genre: String!, password: String!, groupNumber: Int!, link: String, Number: String): Auth
}
`

module.exports = typeDefs;
