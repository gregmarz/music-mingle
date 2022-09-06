const mongoose = require('mongoose');

const { Schema } = mongoose;

const savedArtistSchema = new Schema({
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Artist'
    }
  ]
});

const SavedArtist = mongoose.model('SavedArtist', savedArtistSchema);

module.exports = SavedArtist;