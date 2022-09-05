const mongoose = require("mongoose");

const { Schema } = mongoose;

const artistSchema = new Schema({
  name: {
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
  link: {
    type: String,
  },
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
