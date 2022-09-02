import { gql } from '@appolo/client'

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
    mutation addVenue ()
`