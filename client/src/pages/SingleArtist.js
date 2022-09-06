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
        <ul className="card">
            <li className="deets">{name}</li>
            <li className="deets">{genre}</li>
            <li className="deets">{groupSize}</li>
            <li className="deets">{link}</li>
            <li className="deets"><button>Save Artist</button></li>
      </ul>
    </div>
    );
  }
  
  export default SingleArtist;