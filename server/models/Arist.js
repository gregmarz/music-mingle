const mongoose = require("mongoose");

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
  },
  groupNumber: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
  link: {
    type: String,
  },
  number: {
    type: String,
  },
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
