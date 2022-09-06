import '../components/Nav/index.css'
import React from "react";
import { SAVE_ARTIST } from '../utils/mutations';
import { useMutation } from '@apollo/client';

function SingleArtist(item) {
    const {
        _id,
        name,
        genre,
        groupSize,
        link
    } = item;

    const [saveArtist, { error }] = useMutation(SAVE_ARTIST);
  
    const handle = async (event) => {
        event.preventDefault();
        try {
          await saveArtist({
            variables: { _id: _id, name: name, genre: genre, groupSize: groupSize, link: link },
          });
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <div className="div-border" key={name}>
        <ul className="card">
            <li className="deets">{name}</li>
            <li className="deets">{genre}</li>
            <li className="deets">{groupSize}</li>
            <li className="deets">{link}</li>
            <li className="deets"><button onClick={handle}>Save Artist</button></li>
      </ul>
      {error && <div>Something went wrong...</div>}
    </div>
    );
  }
  
  export default SingleArtist;