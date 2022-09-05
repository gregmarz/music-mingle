const mongoose = require("mongoose");

const { Schema } = mongoose;

const artistSchema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
  },
  groupSize: {
    type: Number,
    required: true,
    min: 1,
  },
  Link: {
    type: String,
  },
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
