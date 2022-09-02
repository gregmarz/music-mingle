const mongoose = require("mongoose");

const venueSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  capacity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
  number: {
    type: String,
  },
  email: {
    type: String,
  },
  socials: {
    type: String,
  },
});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
