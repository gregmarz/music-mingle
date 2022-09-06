import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      userName
    }
  }
`;

export const QUERY_VENUE = gql`
  {
    venue {
      name
      type
      capacity
      number
      location
      website
    }
  }
`;

export const QUERY_ARTIST = gql`
  {
    artist {
      name
      genre
      groupSize
      link
    }
  }
`;

export const QUERY_ARTISTS = gql`
  query artists($_id: String) {
    artists(_id: $_id) {
      _id
      name
      genre
      groupSize
      link
    }
  }
`;

export const QUERY_VENUES = gql`
  query venues($_id: String) {
    venues(_id: $_id) {
      _id
      name
      type
      capacity
      number
      location
      website
    }
  }
`;