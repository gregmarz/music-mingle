const db = require("./connection");
const { User, Artist, Venue } = require("../models");

db.once("open", async () => {
  await Artist.deleteMany();
  const artists = await Artist.insertMany([
    { name: "Billy", genre: "rock", groupSize: 5, link: "www.billy.com" },
    { name: "Thomas", genre: "jazz", groupSize: 2 },
    { name: "Michael", genre: "Pop", groupSize: 1 },
  ]);
  console.log("Artists Seeded");
});
