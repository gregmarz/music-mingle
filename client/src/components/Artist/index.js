import React from "react";
import '../../../server/schemas/resolvers'
import { useEffect, useState } from 'react'
import { Artist } from "../../../../server/models";

function ArtistInfo (props) {
    return(
        <div>
        <h2>{props.Artist.name}</h2>
        <ul>
            <li>{props.Artist.genre}</li>
            <li>{props.Artist.groupSize}</li>
            <li>{props.Artist.link}</li>
        </ul>
        </div>
    )
    }

export default ArtistInfo;