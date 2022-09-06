import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ARTISTS } from '../utils/queries';
import '../components/Nav/index.css'

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
          <div className="div-border" key={name}>
            <ul className="artist-card">
                <li className="arist-deets">{name}</li>
                <li className="arist-deets">{genre}</li>
                <li className="arist-deets">{groupSize}</li>
                <li className="arist-deets">{link}</li>
          </ul>
        </div>
      ))}
    </div>
      )}
    </>
  );
}
