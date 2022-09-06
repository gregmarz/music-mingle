const { AuthenticationError } = require("apollo-server-express");
const { User, Artist, Venue } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return await User.find();
    },
    artist: async (parent, args, context) => {
      return await Artist.find();
    },
    artists: async (parent, args, context) => {
      return await Artist.find();
    },
    venue: async (parent, args, context) => {
      return await Venue.find();
    },
    venues: async (parent, args, context) => {
      return await Venue.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    saveArtist: async (parent, { artists }, context) => {
      console.log(context);
      if (context.user) {
        const savedArtist = new Artist({ artists });

        await User.findByIdAndUpdate(context.user._id, { $push: { savedArtists: savedArtist } });

        return savedArtist;
      }

      throw new AuthenticationError('Not logged in');
    },
    saveVenue: async (parent, { venues }, context) => {
      console.log(context);
      if (context.user) {
        const savedVenue = new SavedVenue({ venues });

        await User.findByIdAndUpdate(context.user._id, { $push: { savedVenues: savedVenue } });

        return savedVenue;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;
