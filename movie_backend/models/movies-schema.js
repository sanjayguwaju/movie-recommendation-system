const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true
  },
  plot: {
    type: String,
    required: true
  },
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  title: {
    type: String,
    required: true
  },
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: {
    wins: Number,
    nominations: Number,
    text: String
  },
  lastupdated: {
    type: Date,
    default: Date.now
  },
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number
    },
    fresh: Number,
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number
    },
    rotten: Number,
    lastUpdated: Date
  },
  num_mflix_comments: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;