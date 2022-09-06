import '../components/Nav/index.css'
import React from "react";

function SingleArtist(item) {
    const {
        name,
        genre,
        groupSize,
        link
    } = item;
  
    return (
        <div className="div-border" key={name}>
        <ul className="artist-card">
            <li className="artist-deets">{name}</li>
            <li className="artist-deets">{genre}</li>
            <li className="artist-deets">{groupSize}</li>
            <li className="artist-deets">{link}</li>
            <li className="artist-deets"><button>Save Artist</button></li>
      </ul>
    </div>
    );
  }
  
  export default SingleArtist;