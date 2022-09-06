import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ARTISTS } from '../utils/queries';

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
    <div>
     {artistList.map(({ name, genre, groupSize, link }) => (
        <p key={name}>
          {name},{genre},{groupSize},{link}
        </p>
      ))}
    </div>
      )}
    </>
  );
}
