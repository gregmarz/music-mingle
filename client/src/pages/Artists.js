import React from "react";
import '../components/Nav/index.css'

const artistNames = [
  { name: "Billy", genre: "rock", groupSize: 5, link: "www.billy.com" },
  { name: "Thomas", genre: "jazz", groupSize: 2 },
  { name: "Michael", genre: "Pop", groupSize: 1 },
];

export default function Artists() {
  return (
    <>
      {artistNames.map(({ name, genre, groupSize, link }) => (
       <div className="div-border" key={name}>
            <ul className="artist-card">
                <li className="arist-deets">{name}</li>
                <li className="arist-deets">{genre}</li>
                <li className="arist-deets">{groupSize}</li>
                <li className="arist-deets">{link}</li>
          </ul>
        </div>
      ))}
    </>
  );
}
