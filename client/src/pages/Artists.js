import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ARTISTS } from '../utils/queries';
import SingleArtist from './SingleArtist';

export default function Artists() {
  const { loading, data } = useQuery(QUERY_ARTISTS, {
    fetchPolicy: "no-cache"
  });

  const artistList = data?.artists || [];

  return (
    <>
    <h1>Artists!</h1>
    {loading ? (
        <div>Loading...</div>
      ) : (
    <div className="div-border">
     {artistList.map(({ name, genre, groupSize, link }) => (
                  <SingleArtist
                  key={name}
                  name={name}
                  genre={genre}
                  groupSize={groupSize}
                  link={link}
                />
      ))}
    </div>
      )}
    </>
  );
}
