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
