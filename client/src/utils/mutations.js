import { gql } from '@apollo/client'

export const ARTIST_LOGIN = gql`
  mutation artistLogin($email: String!, $password: String!) {
    artistLogin(email: $email, password: $password) {
      token
      artist {
        _id
      }
    }
  }
`;

export const VENUE_LOGIN = gql`
  mutation venueLogin($email: String!, $password: String!) {
    venueLogin(email: $email, password: $password) {
      token
      venue {
        _id
      }
    }
  }
`;

export const ADD_ARTIST = gql`
    mutation addArtist(
      $userName: String!
      $email: String!
      $password: String!
      $genre: String!
      $groupNumber: Integer!
      $link: String!
      $number: String!
      ){
        addArtist(
          userName: $String!
          email: $String!
          password: $String!
          genre: $String!
          groupNumber: $Integer!
          link: $String!
          number: $String!
          )token
          artist {
            _id
            email
          }
        }

    }
`

export const ADD_VENUE = gql `
    mutation addVenue 
    ($userName: String!, $email: String!, $password: String! $type: String!, $location: String!, $capacity: Integer!, $number: Integer, $email: String, socials: String) {
        addVenue 
        ($name: String!, $type: String!, $location: String!, $capacity: Integer!, $number: Integer, $email: String, socials: String)
        {
            userName
            email
            password
            type
            location
            capacity
            number
            socials

        }
        
    }
`