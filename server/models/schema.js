/*const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Alien', alienSchema);*/

const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
  isFriendly: { // Boolean attribute
    type: Boolean,
    required: true,
    default: true,
  },
  age: { // Number attribute
    type: Number,
    required: true,
    min: 1,
  },
});

module.exports = mongoose.model('Alien', alienSchema);
