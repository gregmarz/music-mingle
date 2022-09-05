const mongoose = require("mongoose");

const { Schema } = mongoose;

const venueSchema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
