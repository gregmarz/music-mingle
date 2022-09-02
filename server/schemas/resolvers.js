const { AuthenticationError } = require("apollo-server-express");
const { Artist, Venue } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    Artist: async (parent, arg, context) => {
      if (context.artist) {
        return Artist.findOne({ _id: context.artist._id });
      } else {
        throw new AuthenticationError("You must log in first");
      }
    },
    Venue: async (parent, arg, context) => {
      if (context.venue) {
        return Venue.findOne({ _id: context.venue._id });
      } else {
        throw new AuthenticationError("You must log in first");
      }
    },
  },

  Mutation: {
    addArtist: async (parent, { username, email, password }) => {
      const artist = await Artist.create({ username, email, password });
      const token = signToken(artist);
      return { token, artist };
    },
    addVenue: async (parent, { username, email, password }) => {
      const venue = await Venue.create({ username, email, password });
      const token = signToken(venue);
      return { token, venue };
    },
    artistLogin: async (parent, { email, password }) => {
      const artist = await Artist.findOne({ email });
      if (!artist) {
        throw new AuthenticationError("There is no Artist with that email");
      }
      const correctPass = await Artist.isCorrectPassword(password);
      if (!correctPass) {
        throw new AuthenticationError("Password is incorrect");
      }
      const token = signToken(artist);
      return { artist, token };
    },
    venueLogin: async (parent, { email, password }) => {
      const venue = await Venue.findOne({ email });
      if (!venue) {
        throw new AuthenticationError("There is no venue with that email");
      }
      const correctPass = await User.isCorrectPassword(password);
      if (!correctPass) {
        throw new AuthenticationError("Password is incorrect");
      }
      const token = signToken(venue);
      return { venue, token };
    },
  },
};

module.exports = resolvers;
