const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const artistSchema = new mongoose.Schema({
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

artistSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

artistSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
