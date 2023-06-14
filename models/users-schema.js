const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;