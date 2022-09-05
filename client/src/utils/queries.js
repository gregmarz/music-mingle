import { gql } from '@apollo/client'

export const QUERY_ARTISTS = gql`
    query getArtists {
        artists {
            _id
            name
            genre
            groupNumber
            link
            number
        }
    }
`

export const QUERY_SINGLE_ARTIST = gql`
    query getSingleArtist {
        artist (artistId: $artistId) {
            _id
            name
            genre
            groupNumber
            link
            number
        }
    }
`

export const QUERY_VENUES = gql`
    query getVenues {
     venue {   
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
export const QUERY_SINGLE_VENUE = gql`
    query getSingleVenue {
       venue (venueId: $venueId){
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
