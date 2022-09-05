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
    mutation addArtist ($name: String!, $genre: String!, $groupNumber: Integer!, $link: String!, $number: String!) {
        addArtist ($name: String!, $genre: String!, $groupNumber: Integer!, $link: String!, $number: String!) {
            _id
            name
            genre
            groupNumber
            link
            number
        }

    }
`

export const ADD_VENUE = gql `
    mutation addVenue 
    ($name: String!, $type: String!, $location: String!, $capacity: Integer!, $number: Integer, $email: String, socials: String) {
        addVenue 
        ($name: String!, $type: String!, $location: String!, $capacity: Integer!, $number: Integer, $email: String, socials: String)
        {
            _id
            name
            type
            location
            capacity
            number
            email
            socials

        }
        
    }
`