import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_ARTIST = gql`
  mutation saveArtist($artists: [ID]!) {
    saveArtist(artists: $artists) {
      artists {
        _id
        name
        genre
        groupSize
        link
      }
    }
  }
`;

export const SAVE_VENUE = gql`
mutation saveVenue($venues: [ID]!) {
  saveVenue(venues: $venues) {
    venues {
      _id
      name
      type
      capacity
      number
      location
      website
    }
  }
}
`;