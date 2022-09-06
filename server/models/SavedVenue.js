const mongoose = require('mongoose');

const { Schema } = mongoose;

const savedVenueSchema = new Schema({
  venues: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Venue'
    }
  ]
});

const SavedVenue = mongoose.model('SavedVenue', savedVenueSchema);

module.exports = SavedVenue;