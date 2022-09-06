import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_ARTISTS, QUERY_USER } from '../utils/queries';
import { SAVE_ARTIST } from '../utils/mutations';
import '../components/Nav/index.css'
import Auth from '../utils/auth';

export default function Artists() {
  const [userArtist, setUserArtist] = useState('');

  const [saveArtist, { error }] = useMutation(SAVE_ARTIST, {
    update(cache, { data: { saveArtist } }) {
      try {
        const { artists } = cache.readQuery({ query: QUERY_ARTISTS });

        cache.writeQuery({
          query: QUERY_ARTISTS,
          data: { artists: [saveArtist, ...artists] },
        });
      } catch (e) {
        console.log(error);
        console.error(e);
      }

      // update me object's cache
      const { user } = cache.readQuery({ query: QUERY_USER });
      cache.writeQuery({
        query: QUERY_USER,
        data: { user: { ...user, savedArtists: [...user.savedArtists, saveArtist] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await saveArtist({
        variables: {
          userArtist,
          userSaving: Auth.getProfile().data.username,
        },
      });
      console.log('success')
      setUserArtist('');
    } catch (err) {
      console.error(err);
    }
  };
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
          <div key={name}>
            <ul className="card">
                <li className="deets">{name}</li>
                <li className="deets">{genre}</li>
                <li className="deets">{groupSize}</li>
                <li className="deets">{link}</li>
                <li className="deets"><button onClick={handleFormSubmit}>Save Artist</button></li>
          </ul>
        </div>
      ))}
    </div>
      )}
    </>
  );
}
