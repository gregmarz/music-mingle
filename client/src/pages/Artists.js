import React from "react";
import '../../../server/schemas/resolvers'



const artistNames = [
  { name: "Billy", genre: "rock", groupSize: 5, link: "www.billy.com" },
  { name: "Thomas", genre: "jazz", groupSize: 2 },
  { name: "Michael", genre: "Pop", groupSize: 1 },
];

export default function Artists() {
  return (
    <>
      {artistNames.map(({ name, genre, groupSize, link }) => (
        <p key={name}>
          {name},{genre},{groupSize},{link}
        </p>
      ))}
    </>
  );
}
