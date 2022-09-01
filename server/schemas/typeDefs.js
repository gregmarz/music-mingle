const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Artist {}
type Venue {}
type Auth {
    token: ID!
    user: User
}
type Query {}
type Mutation {}
`

module.exports = typeDefs;
