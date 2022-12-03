const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  pNumber: {
    type: Number,
    require: true,
  },
  pword: {
    type: String,
    require: true,
  },
  cPword: {
    type: String,
    require: true,
  }
});

const user = mongoose.model("user", userSchema);

module.exports = user;
