import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_VENUES } from '../utils/queries';
import '../components/Nav/index.css'
/* import { Loader } from '@googlemaps/js-api-loader'
const mapKey = process.env.GOOGLE_API_KEY */

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
    <div>
      {venueList.map(({ name, type, capacity, number, location, website }) => (
         <div className="div-border" key={name}>
         <ul className="card">
             <li className="deets">{name}</li>
             <li className="deets">{type}</li>
             <li className="deets">{capacity}</li>
             <li className="deets">{number}</li>
             <li className="deets">{location}</li>
             <li className="deets">{website}</li>
       </ul>
     </div>
      ))}
          </div>
      )}
    </>
  );
}
