import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ARTISTS } from '../utils/queries';
import SingleArtist from './SingleArtist';

function Artists() {
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
     {artistList.map(({ _id, name, genre, groupSize, link }) => (
                  <SingleArtist
                  key={name}
                  _id={_id}
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

export default Artists;