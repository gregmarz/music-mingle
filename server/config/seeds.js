const db = require("./connection");
const { User, Artist, Venue } = require("../models");

db.once("open", async () => {
  await Artist.deleteMany();
  const artists = await Artist.insertMany([
    { name: "Billy", genre: "rock", groupSize: 5, link: "www.billy.com" },
    { name: "Thomas", genre: "jazz", groupSize: 2 },
    { name: "Michael", genre: "Pop", groupSize: 1 },
  ]);
  console.log("artists seeded");

  await Venue.deleteMany();
  const venues = await Venue.insertMany([
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
  ]);
  console.log("venues seeded");
  await User.deleteMany();
  const users = await User.insertMany([
    {
      userName: "test",
      email: "test@gmail.com",
      password: "password",
      savedArtists: artists[0],
      savedVenues: venues[0],
    },
  ]);
  console.log("users seeded");
  process.exit(0);
});
