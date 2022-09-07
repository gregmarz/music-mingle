import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_VENUES } from '../utils/queries';
import '../components/Nav/index.css'
import MyMap from "../components/Map/Maps";

export default function Venues() {
  const { loading, data } = useQuery(QUERY_VENUES, {
    fetchPolicy: "no-cache"
  });

  const venueList = data?.venues || [];
  return (
    <>
      <h1>Venues!</h1>
      {loading ? (
      <div>Loading...</div>
      ) : (
    <div className="div-border">
      {venueList.map(({ name, type, capacity, number, location, website }) => (
         <div className="div-border" key={name}>
         <ul className="card">
             <li className="deets">{name}</li>
             <li className="deets">{type}</li>
             <li className="deets">{capacity}</li>
             <li className="deets">{number}</li>
             <li className="deets">{location}</li>
             <li className="deets"><a href={website}>{website}</a></li>
             <li className="deets"><button type="submit">Save Venue</button></li>
       </ul>
     </div>
      ))}
      <div>
      <MyMap />
      </div>
      
      </div>

      )}
    </>
  );
}


 



