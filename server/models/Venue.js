const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
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
  socials: {
    type: String,
  },
});

venueSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

venueSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
