import React from "react";

const venueList = [
  {
    name: "Johns Jazzy Venue",
    type: "Outside",
    capacity: 500,
    number: "440-555-5555",
    location: "Ohio",
    website: "www.JJV.com",
  },
  {
    name: "Momma Mia's Motel",
    type: "Inside",
    capacity: 12,
    number: "216-555-5555",
    location: "Iowa",
    website: "www.miamoteliowa.com",
  },
  {
    name: "Michael Jackson Reborn",
    type: "Inside",
    capacity: 150,
    number: "216-543-0307",
    location: "South Carolina",
    website: "www.MJR.gov",
  },
];

export default function Venues() {
  return (
    <>
      {venueList.map(({ name, type, capacity, number, location, website }) => (
        <p key={name}>
          {name},{type}, {capacity}, {number}, {location}, {website}
        </p>
      ))}
    </>
  );
}
